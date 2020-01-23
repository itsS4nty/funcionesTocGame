cd /home/hit
echo sa | sudo -S rm -r tocGame
git clone https://github.com/hit-systems/tocGame.git
cd tocGame
echo sa | sudo -S rm -rf node_modules/
echo sa | sudo -S npm update
echo sa | sudo -S npx electron-rebuild -f -p
npm start
