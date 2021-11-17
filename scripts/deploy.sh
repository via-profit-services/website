#!/bin/bash

# Deploy script

#-------------------------------#
#    Variables and functions    #
#-------------------------------#

# Variables of output colors
COLOR_RED="\e[31m";
COLOR_YELLOW="\e[33m";
COLOR_GREEN="\e[32m";
COLOR_BOLD="\e[1m";
COLOR_NORMAL="\e[0m"


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
rsync -r ./dist/* "${REMOTE_LOCATION}";
rsync ./scripts/restart.sh "${REMOTE_LOCATION}/restart";

# Restart
ssh "${DEPLOY_USER}@${DEPLOY_HOST}" << EOF
cd $DEPLOY_PATH
chmod u+x "$(echo $DEPLOY_PATH)restart"
./restart
EOF

echo -e "${COLOR_GREEN}Complete${COLOR_NORMAL}";