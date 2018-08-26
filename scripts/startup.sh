#!/bin/bash
npm i
pm2-runtime start pm2.json --web ${PM2_PORT}