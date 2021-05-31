/*CMD
  command: match3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })

var odbt = [[{ title: "¹st",command: "odd1" },{ title: "²nd",command: "odd2" },{ title: "³rd",command: "odd3" }],[{ title: "⁴th",command: "odd4" },{ title: "⁵th",command: "odd5" },{ title: "⁶th",command: "odd6" }],[{ title: "⁷th",command: "odd7" },{ title: "⁸th",command: "odd8" },{ title: "⁹th",command: "odd9" },{ title: "¹⁰th",command: "odd10" }],[{ title: "🔙 Back",command: "match2" }]]

User.setProperty("odd1","off","string")
User.setProperty("odd2","off","string")
User.setProperty("odd3","off","string")
User.setProperty("odd4","off","string")
User.setProperty("odd5","off","string")
User.setProperty("odd6","off","string")
User.setProperty("odd7","off","string")
User.setProperty("odd8","off","string")
User.setProperty("odd9","off","string")
User.setProperty("odd10","off","string")
Bot.sendInlineKeyboard(odbt, "🎗️ Pick the game you would like to bet on, You can add bet on different games. We have game from 1 - 10, 🔺 Check up")
