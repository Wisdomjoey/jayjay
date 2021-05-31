/*CMD
  command: ☎️ Support
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("🚫 Cancel", "*Welcome To Support*")

let Ask = User.getProperty("Ask")
var button = [{ title : "✏️Write Me" , command : "Ask" }]
Bot.sendInlineKeyboard(button , "*📫 Last Question = "+Ask+"*")
