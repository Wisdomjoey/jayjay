/*CMD
  command: chat1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: *Send Your Message*
  keyboard: 
  aliases: 
CMD*/

var chtgid = User.getProperty("chtgid")

Api.sendMessage({
chat_id: chtgid,
text: user.telegramid+" Sent You A Message\n\n"+message,
reply_markup: { inline_keyboard: [[{text: "✍️ Reply", callback_data:"chat2"}]] }
})
Bot.sendMessage("✔️ Sent")
