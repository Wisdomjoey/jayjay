/*CMD
  command: odd6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var odma11 = Bot.getProperty("m11")
var odma12 = Bot.getProperty("m12")
var mabt = [[{ title: "1",command: "addbet1" },{ title: "X",command: "addbet2" },{ title: "2",command: "addbet3" }],[{ title: "More Odds",command: "moreodd" }]]

User.setProperty("odd6","on","string")
User.setProperty("odd2","off","string")
User.setProperty("odd3","off","string")
User.setProperty("odd4","off","string")
User.setProperty("odd5","off","string")
User.setProperty("odd1","off","string")
User.setProperty("odd7","off","string")
User.setProperty("odd8","off","string")
User.setProperty("odd9","off","string")
User.setProperty("odd10","off","string")
Bot.sendInlineKeyboard(mabt, odma11+" vs "+odma12+"\n\nPlace your odds for this game")
