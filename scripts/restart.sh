#!/bin/bash

# REQUIRED nvm (https://github.com/nvm-sh/nvm)


#-------------------------------#
#    Variables and functions    #
#-------------------------------#

# Variables of output colors
COLOR_RED="\e[31m";
COLOR_YELLOW="\e[33m";
COLOR_GREEN="\e[32m";
COLOR_BOLD="\e[1m";
COLOR_GREY="\e[2m"
COLOR_NORMAL="\e[0m"

# Node JS version will be installed by nmv
# You can use specified version name, eg.: 16.13.0
NODE_VERSION=16

# Returns process PID
# arguments
#  1 - server port number
getProcessPIDByPortNumber() {
  echo $(lsof -n -i:$1 | grep LISTEN | awk '{ print $2 }' | uniq | xargs -r);
}



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


# chack to .env variables
if [ -z "$SERVER_HOSTNAME" ]
  then
  echo -e "${COLOR_RED}Error. Variable «SERVER_HOSTNAME» is missing in .env file.${COLOR_NORMAL}";
  echo -e "${COLOR_RED}Operation stopped.${COLOR_NORMAL}";
  exit;
fi;

if [ -z "$SERVER_PORT" ]
  then
  echo -e "${COLOR_RED}Error. Variable «SERVER_PORT» is missing in .env file.${COLOR_NORMAL}";
  echo -e "${COLOR_RED}Operation stopped.${COLOR_NORMAL}";
  exit;
fi;

# install node
source $HOME/.nvm/nvm.sh
echo -e "${COLOR_GREY}nvm install ${NODE_VERSION}${COLOR_NORMAL}"
echo -e "${COLOR_GREY}nvm use ${NODE_VERSION}${COLOR_NORMAL}"

PID=$(getProcessPIDByPortNumber $SERVER_PORT);

# Restart
if [ ! -z "$PID" ]
then
  echo -e "${COLOR_YELLOW}Application will be killed at pid ${COLOR_BOLD}${PID}${COLOR_NORMAL}";
  kill -9 "$PID";
fi;


echo -e "${COLOR_YELLOW}Start application at ${COLOR_BOLD}http://${SERVER_HOSTNAME}:${SERVER_PORT}${COLOR_NORMAL}";
/usr/bin/env node . > crash.log &
echo -e "${COLOR_GREEN}The crash log will be saved at ${COLOR_BOLD}«./crash.log»${COLOR_NORMAL}";
