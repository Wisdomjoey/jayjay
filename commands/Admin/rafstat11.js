/*CMD
  command: rafstat11
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var winnerid = Bot.getProperty("winnerid")
var winnern = Bot.getProperty("winnern")
var winsmsg = "🔮 *Raffle Draw Ended*\nWinner Name: "+winnern+"\n Winner Id: "+winnerid+""

if (user.telegramid == "1527336418"){
 
  Bot.setProperty("winmsg", winsmsg)
  Bot.runAll({
    command: "rafstat111"
  })
  Bot.sendMessage("✔️ Message sent to all active members")
} else {
 Bot.sendMessage("❌ You are not allowed to use this")
}
