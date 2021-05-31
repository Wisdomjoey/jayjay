/*CMD
  command: match2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })

var ma1 = Bot.getProperty("m1")
var ma2 = Bot.getProperty("m2")
var ma3 = Bot.getProperty("m3")
var ma4 = Bot.getProperty("m4")
var ma5 = Bot.getProperty("m5")
var ma6 = Bot.getProperty("m6")
var ma7 = Bot.getProperty("m7")
var ma8 = Bot.getProperty("m8")
var ma9 = Bot.getProperty("m9")
var ma10 = Bot.getProperty("m10")
var ma11 = Bot.getProperty("m11")
var ma12 = Bot.getProperty("m12")
var ma13 = Bot.getProperty("m13")
var ma14 = Bot.getProperty("m14")
var ma15 = Bot.getProperty("m15")
var ma16 = Bot.getProperty("m16")
var ma17 = Bot.getProperty("m17")
var ma18 = Bot.getProperty("m18")
var ma19 = Bot.getProperty("m19")
var ma20 = Bot.getProperty("m20")
var mbut = [[{ title: "🔋 ODDS",command: "match3" },{ title: "🔙 Back",command: "⚽ Soccer" }]]

Api.sendPhoto({
photo: "https://t.me/Black_Tron_Official_Channel/9",
caption: "🚩 *Available Matches* 🚩\n▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n\n1. "+ma1+" vs "+ma2+"\n2. "+ma3+" vs "+ma4+"\n3. "+ma5+" vs "+ma6+"\n4. "+ma7+" vs "+ma8+"\n5. "+ma9+" vs "+ma10+"\n6. "+ma11+" vs "+ma12+"\n7. "+ma13+" vs "+ma14+"\n8. "+ma15+" vs "+ma16+"\n9. "+ma17+" vs "+ma18+"\n10. "+ma19+" vs "+ma20
})
Bot.sendInlineKeyboard(mbut, "🏴 Now You Can  Place Odd For Matches.\nPlease Note that available matches*🎈 Kick Off* after 10 minutes and last for 20 minutes so place odds fast 🥇. !Click Below")
