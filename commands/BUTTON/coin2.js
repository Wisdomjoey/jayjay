/*CMD
  command: coin2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var coin = User.getProperty("coin")
var coi = coin / 10
var balance = Libs.ResourcesLib.userRes("balance")
var bet = User.getProperty("bet")

if (coi > balance.value()){
Bot.sendMessage("Oh! 👀, Seems your balance is too low. Top up your balance and come back")
}else{
if (coi < 10){
Bot.sendMessage("😐 *Please*   The Minimum Stake is 10 Gamo")
Bot.runCommand("coin1")
}else{
Bot.sendMessage("*😊 Great!* Your Stake is = "+coi+" Gamo")
balance.add(-coi)
Bot.runCommand("coingame")
}
}

if (bet == 10000000){
var con = bet + coi
var con1 = con - 10000000
User.setProperty("bet",con1,"integer")
}else{
var con2 = bet + coi
User.setProperty("bet",con2,"integer")
}
