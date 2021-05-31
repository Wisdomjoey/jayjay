/*CMD
  command: odd5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var odma9 = Bot.getProperty("m9")
var odma10 = Bot.getProperty("m10")
var mabt = [[{ title: "1",command: "addbet1" },{ title: "X",command: "addbet2" },{ title: "2",command: "addbet3" }],[{ title: "More Odds",command: "moreodd" }]]

User.setProperty("odd5","on","string")
User.setProperty("odd2","off","string")
User.setProperty("odd3","off","string")
User.setProperty("odd4","off","string")
User.setProperty("odd1","off","string")
User.setProperty("odd6","off","string")
User.setProperty("odd7","off","string")
User.setProperty("odd8","off","string")
User.setProperty("odd9","off","string")
User.setProperty("odd10","off","string")
Bot.sendInlineKeyboard(mabt, odma9+" vs "+odma10+"\n\nPlace your odds for this game")
