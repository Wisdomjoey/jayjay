/*CMD
  command: first
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: *Send Amount You Want To Stake*
  keyboard: 
  aliases: 
CMD*/

var ms = message * 10

User.setProperty("stake",ms,"integer")
Bot.runCommand("second")
