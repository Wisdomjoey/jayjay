/*CMD
  command: rafstat2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: Set Raffle Status
  keyboard: Open,Close\n🔙 Back
  aliases: 
CMD*/

Bot.setProperty("raft",message,"string")
Bot.sendMessage("Done")
