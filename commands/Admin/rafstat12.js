/*CMD
  command: rafstat12
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cansmsg = "📌 Raffle Draw is ❌ cancelled, your Gamo Point had been refunded."

if (user.telegramid == "1527336418"){
 
  Bot.setProperty("cannmsg", cansmsg)
  Bot.runAll({
    command: "rafstat121"
  })
  Bot.sendMessage("✔️ Message sent to all active members")
} else {
 Bot.sendMessage("❌ You are not allowed to use this")
}
