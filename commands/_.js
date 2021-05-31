/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ukc = User.getProperty("ukc")
var balance = Libs.ResourcesLib.userRes("balance")

if (ukc == undefined){
Bot.sendMessage("*❌ Unknown Command*\nDo not send direct message into the bot, if your warning gets to 0, 2 Gamo Points would be removed from your balance.\n\nYou have : 5 Warning left")
User.setProperty("ukc",1,"integer")
}else{
if (ukc == 5){
var un = ukc - 5
Bot.sendMessage("*❌ Unknown Command*\nDo not send direct message into the bot, if your warning gets to 0, 2 Gamo Points would be removed from your balance.\n\nYou have : 0 Warning left")
balance.add(-2)
User.setProperty("ukc",un,"integer")
}else{
var unk = ukc + 1
var wan = 5 - ukc
Bot.sendMessage("*❌ Unknown Command*\nDo not send direct message into the bot, if your warning gets to 0, 2 Gamo Points would be removed from your balance.\n\nYou have : "+wan+" Warning left")
User.setProperty("ukc",unk,"integer")
}
}
