#!/bin/sh

WORK_DIR="$(pwd)";
GRAPHQL_PORT_OPTION="SERVER_PORT";
REGEXP="^"$GRAPHQL_PORT_OPTION"=([0-9]+)$";

echo "Work dir is «$WORK_DIR»";
echo "Port option name is «$GRAPHQL_PORT_OPTION»";


PORT="$(cat "$WORK_DIR/.env" | egrep -oh "$REGEXP" | egrep -o '[0-9]+')";
PID="$(lsof -Fp -i:$PORT | grep -Eo '^p[0-9]+$' | grep -oE '[0-9]+')";

cd $WORK_DIR;


if [ ! -z "$PID" ]
then 
  echo "Application will be killed at pid $PID";
  kill -9 "$PID";
  echo "Start application at port $PORT";
  node "$WORK_DIR/index.js" > /dev/null &

else
  echo "Application is not running";
  echo "Start application at port $PORT";
  node "$WORK_DIR/index.js" > /dev/null &
fi;

echo "Done";
