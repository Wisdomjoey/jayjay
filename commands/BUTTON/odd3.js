/*CMD
  command: odd3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var odma5 = Bot.getProperty("m5")
var odma6 = Bot.getProperty("m6")
var mabt = [[{ title: "1",command: "addbet1" },{ title: "",command: "addbet2" },{ title: "2",command: "addbet3" }],[{ title: "More Odds",command: "moreodd" }]]

User.setProperty("odd3","on","string")
User.setProperty("odd2","off","string")
User.setProperty("odd1","off","string")
User.setProperty("odd4","off","string")
User.setProperty("odd5","off","string")
User.setProperty("odd6","off","string")
User.setProperty("odd7","off","string")
User.setProperty("odd8","off","string")
User.setProperty("odd9","off","string")
User.setProperty("odd10","off","string")
Bot.sendInlineKeyboard(mabt, odma5+" vs "+odma6+"\n\nPlace your odds for this game")
