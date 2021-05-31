/*CMD
  command: chat3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: *Send Message*
  keyboard: 
  aliases: 
CMD*/

var reptgid = User.getProperty("reptgid")

Api.sendMessage({
chat_id: reptgid,
text: user.telegramid+" Replied To Your Message\n\n"+message,
reply_markup: { inline_keyboard: [[{text: "✍️ Reply", callback_data:"chat2"}]] }
})
Bot.sendMessage("✔️ Sent")
