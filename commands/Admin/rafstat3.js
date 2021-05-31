/*CMD
  command: rafstat3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var winra = [{ title: "🖋️ Set Id",command: "rafstat31" },{ title: "🖋️ Set Name",command: "rafstat32" }]

Bot.sendInlineKeyboard(winra, "Set winner's details")
