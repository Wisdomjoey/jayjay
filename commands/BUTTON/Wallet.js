/*CMD
  command: Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: *📌Send Your TRX Wallet Where U Want To Recieve Payment From This Bot !*
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("🔙 Back", "Done")

var wallet = Bot.getProperty("wallet"+user.telegramid+"")
Bot.setProperty("wallet"+user.telegramid+"", message, "string")
Bot.sendMessage("*🔍Your TRX Wallet Is Set To...    "+"_"+message+"_"+"*")
