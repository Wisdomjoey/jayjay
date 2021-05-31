/*CMD
  command: result
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.result.dice.value
var trbt = [{ title: "🏀 Try Again", command: "ball$" }]
var trbt1 = [{ title: "🏀 Play Again", command: "ball$" }]
var balance = Libs.ResourcesLib.userRes("balance")
var balst = User.getProperty("balst")
var bals = balst / 10
var bal = bals * 10
var ba = bal * 1.5
var ba1 = bal * 2

balance.add(-bal)
if (result < 4){
Bot.sendInlineKeyboard(trbt, "Ooohh! ⁉️ You Lost")
}else{
if (result == 4){
Bot.sendInlineKeyboard(trbt1, "Yay!!! 🎉 You Won "+ba+" Gamo")
balance.add(ba)
}else{
if (result == 5){
Bot.sendInlineKeyboard(trbt1, "Yay!!! 🎉 You Won "+ba1+" Gamo")
balance.add(ba1)
}
}}
