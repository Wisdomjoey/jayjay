/*CMD
  command: second
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var stake = User.getProperty("stake")
var st1 = stake / 10
var bet = User.getProperty("bet")

if (st1 > balance.value()){
Bot.sendMessage("Your Gamo Point is Low\n\nYou have = "+balance.value()+" Gamo\n\nDeposit to get more")
}else{
if (st1 < 1){
Bot.sendMessage("😒 _*Sorry But Minimum Stake Is 1 Gamo*_")
}else{
Bot.sendMessage("Your Stake = "+st1+" Gamo")
Bot.sendMessage("Please Enter A Random number Between 1 to 6.")
balance.add(-st1)
Bot.runCommand("dicegame")
}
}

if (bet == 10000000){
var dic = bet + st1
var dic1 = dic - 10000000
User.setProperty("bet",dic1,"integer")
}else{
var dic2 = bet + st1
User.setProperty("bet",dic2,"integer")
}
