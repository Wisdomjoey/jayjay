/*CMD
  command: raft2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("raffid",undefined,"string")
Bot.setProperty("entry",0,"integer")
User.setProperty("ticket",0,"integer")
Bot.sendMessageToChatWithId(1527336418, "✅ Cleared")
