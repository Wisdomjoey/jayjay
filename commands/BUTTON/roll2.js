/*CMD
  command: roll2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ra = User.getProperty("roll")
var re = ra / 10
var be = [{ title: "⭕ Spin",command: "roll3" }]
var balance = Libs.ResourcesLib.userRes("balance")
var bet = User.getProperty("bet")

if (re > balance.value()){
Bot.sendMessage("👀 Oops, It seems your balance is too low. Go and top up then come back.")
}else{
if (re < 1){
Bot.sendMessage("❌ Sorry But Minimum Stake is 1 Gamo")
Bot.runCommand("roll1")
}else{
balance.add(-re)
Bot.sendInlineKeyboard(be, "Your stake = "+re+" Gamo")
}
}

if (bet == 10000000){
var rol = bet + re
var rol1 = rol - 10000000
User.setProperty("bet",rol1,"integer")
}else{
var rol2 = bet + re
User.setProperty("bet",rol2,"integer")
}
