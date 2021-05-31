/*CMD
  command: match1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var betslip = User.getProperty("betslip")

Bot.sendKeyboard("↩️ Back", betslip)
