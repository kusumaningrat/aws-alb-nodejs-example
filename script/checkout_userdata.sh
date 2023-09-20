#!/bin/bash

echo "Installing Node.js"
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt update
sudo apt install -y nodejs
node -v

echo "Cloning Project"
cd /home/ubuntu
git clone https://github.com/kusumaningrat/aws-alb-nodejs-example
cd aws-alb-nodejs-example/
git switch checkout
git pull origin checkout

echo "Installing Dependencies"
npm install

echo "Instaling pm2"
sudo npm install pm2@latest -g
sudo pm2 start index.js