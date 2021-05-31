/*CMD
  command: coins
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = [{ title: "🔹 Flip",command: "coin1" }]

Bot.sendInlineKeyboard(key, "📍 Do You Wish To Play Again")
