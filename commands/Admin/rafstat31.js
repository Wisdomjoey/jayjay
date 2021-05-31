/*CMD
  command: rafstat31
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: Send winner id
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("winnerid",message,"string")
Bot.sendMessage("Done")
