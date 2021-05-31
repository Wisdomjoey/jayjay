/*CMD
  command: result1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.result.dice.value
var trbt = [{ title: "🎯 Try Again", command: "dart$" }]
var trbt1 = [{ title: "🎯 Play Again", command: "dart$" }]
var balance = Libs.ResourcesLib.userRes("balance")
var dast = User.getProperty("dast")
var das = dast / 10
var da = das * 10
var da1 = da * 0.5
var da2 = da * 1.4
var da3 = da * 1.6
var da4 = da * 1.8

balance.add(-da)
if (result == 1){
Bot.sendInlineKeyboard(trbt, "Ooohh! ⁉️ You Lost ")
balance.add(-da1)
}else{
if (result == 2){
Bot.sendInlineKeyboard(trbt1, "Yay!!! 🎉 You Won "+da1+" Gamo")
balance.add(da1)
}else{
if (result == 3){
Bot.sendInlineKeyboard(trbt1, "Yay!!! 🎉 You Won "+da+" Gamo")
balance.add(da)
}else{
if (result == 4){
Bot.sendInlineKeyboard(trbt1, "Yay!!! 🎉 You Won "+da2+" Gamo")
balance.add(da2)
}else{
if (result == 5){
Bot.sendInlineKeyboard(trbt1, "Yay!!! 🎉 You Won "+da3+" Gamo")
balance.add(da3)
}else{
if (result == 6){
Bot.sendInlineKeyboard(trbt1, "Yay!!! 🎉 *Jackpot* You Won "+da4+" Gamo")
balance.add(da4)
}
}}}}}
