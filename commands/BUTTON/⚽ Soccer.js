/*CMD
  command: ⚽ Soccer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mat = [[{ title: "🔖 BetSlip",command: "match1" },{ title: "🥇 Matches",command: "match2" }]]

Bot.sendInlineKeyboard(mat, "🏁 *Predict Mactches* 🏁\n\nHere you can predict matches and win if prediction is correct. Click below to see available matches")
