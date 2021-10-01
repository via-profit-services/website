#!/bin/sh

# Deploy script

#-------------------------------#
#    Variables and functions    #
#-------------------------------#

# Variables of output colors
COLOR_RED="\033[31m";
COLOR_YELLOW="\033[33m";
COLOR_GREEN="\033[32m";
COLOR_BOLD="\033[1m";
COLOR_NORMAL="\033[0m"


#-------------------------------#
#             Action            #
#-------------------------------#

# check .env file and exit if is not exists
if [ ! -f .env ]; then
  echo -e "${COLOR_RED}Error. File «.env» is missing.${COLOR_NORMAL}";
  echo -e "${COLOR_RED}Operation stopped.${COLOR_NORMAL}";
  exit;
fi


# Read .env file
export $(grep -v '^#' .env | xargs);

# combine deploy ssh path
REMOTE_LOCATION="${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}";

echo -e "${COLOR_YELLOW}Uploading to «${REMOTE_LOCATION}»${COLOR_NORMAL}";

# Copy files
rsync -r --progress ./dist/* "${REMOTE_LOCATION}";

# Restart
ssh -T "${DEPLOY_USER}@${DEPLOY_HOST}" << EOSSH
  cd ${DEPLOY_PATH}
  sh ${DEPLOY_PATH}restart.sh
EOSSH

echo -e "${COLOR_GREEN}Complete${COLOR_NORMAL}";