/*CMD
  command: coin1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: 💢 Send Amount You Wish to Bet
  keyboard: 
  aliases: 
CMD*/

var msg1 = message * 10

User.setProperty("coin",msg1,"integer")
Bot.runCommand("coin2")
