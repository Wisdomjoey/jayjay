/*CMD
  command: guess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var guess = User.getProperty("guess")
var ga = guess / 10
var bet = User.getProperty("bet")

if (guess > balance.value()){
Bot.sendMessage("You are low on Gamo Point, Top up your balance and come back")
}else{
if (ga < 0.5){
Bot.sendMessage("Minimum Stake is 0.5 Gamo")
}else{
balance.add(-ga)
Bot.sendMessage("Pick a number between 1 - 30")
Bot.runCommand("guess2")
}}

if (bet == 10000000){
var ges = bet + ga
var ges1 = ges - 10000000
User.setProperty("bet",ges1,"integer")
}else{
var ges2 = bet + ga
User.setProperty("bet",ges2,"integer")
}
