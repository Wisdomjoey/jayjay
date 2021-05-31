/*CMD
  command: roll1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: *🔻 Send Your Stake 🔻*
  keyboard: 🔙 Back
  aliases: 
CMD*/

var mes = message * 10

User.setProperty("roll",mes,"integer")
Bot.runCommand("roll2")
