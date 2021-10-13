#!/bin/sh


#-------------------------------#
#    Variables and functions    #
#-------------------------------#

# Variables of output colors
COLOR_RED="\033[31m";
COLOR_YELLOW="\033[33m";
COLOR_GREEN="\033[32m";
COLOR_BOLD="\033[1m";
COLOR_NORMAL="\033[0m"


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


PID=$(getProcessPIDByPortNumber $SERVER_PORT);

# Restart
if [ ! -z "$PID" ]
then
  echo -e "${COLOR_YELLOW}Application will be killed at pid ${COLOR_BOLD}${PID}${COLOR_NORMAL}";
  kill -9 "$PID";
fi;


echo -e "${COLOR_YELLOW}Start application at ${COLOR_BOLD}${SERVER_HOSTNAME}:${SERVER_PORT}${COLOR_NORMAL}";
node index.js > /dev/null &
echo -e "${COLOR_GREEN}Done${COLOR_NORMAL}";
