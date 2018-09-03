#!/bin/bash

ssh root@catcat.io "cd ~/catcat-chatbot-hotwallet && docker-compose exec -T catcat-chatbot-hotwallet pm2 logs"
