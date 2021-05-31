/*CMD
  command: 📤 Transfer Point
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var tranbt = [{ title: "🚦 Send",command: "/trans" }]

Bot.sendInlineKeyboard(tranbt, "⁉️ Are You Sure You Want To Transfer Point To Another User?")
