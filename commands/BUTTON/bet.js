/*CMD
  command: bet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var match = Bot.getProperty("match")
var matchres = Bot.getProperty("matchres")

if (match == "Ended"){
Bot.sendMessage("Current Game Ended\n\n*Results:*\n\n"+matchres)
Bot.sendMessage("Check your game for any wins and submit bet id for verification\n\n*Note:* Your slip would be cleared after 7 days so claim your win within that period to avoid _loss of reward_")
}else{
bot.runCommand("bethook")
}
