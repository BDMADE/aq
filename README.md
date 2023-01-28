# AQ Project
A React and strapi.js based project
# Shutdown the server
pm2 delete art_quest_backend art_quest_frontend
# Start the server
pm2 start ecosystem.config.js -i 0
