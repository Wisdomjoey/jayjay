/*CMD
  command: guess1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg = message * 10

User.setProperty("guess",msg,"integer")
Bot.runCommand("guess")
