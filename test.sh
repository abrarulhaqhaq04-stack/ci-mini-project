#!/bin/bash
if  grep -i "Hello" app.js; then
echo " found "
exit 0
else 
echo " Not found"
exit 1
fi
