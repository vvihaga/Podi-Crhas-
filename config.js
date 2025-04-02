const fs = require('fs')

global.owner = "6289506368777" //owner number
global.footer = "pfft" //footer section
global.status = true //"self/public" section of the bot

global.lol = "";
global.mess = {
    owner: "lu bukan owner😏"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
