/*CMD
  command: rafstat32
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: Send winner's name
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("winnern",message,"string")
Bot.sendMessage("Done")
