/*CMD
  command: rafstat1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var stats = [[{ title: "🛎️ Announce",command: "rafstat11" },{ title: "❌ Cancel Raffle",command: "rafstat12" }]]

Bot.sendInlineKeyboard(stats, "Pick, Your Choice")
