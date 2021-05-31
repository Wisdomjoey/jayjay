/*CMD
  command: /trans
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: *Send User's Telegram Id*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("trtgid",message,"string")
Bot.runCommand("/trans1")
