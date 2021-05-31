/*CMD
  command: 💸 Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("🚫 Cancel", "*Please*")

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = Bot.getProperty("wallet"+user.telegramid+"")
if( wallet == undefined ){
Bot.sendMessage("_❌ Wallet Not set_")
}else{
if (balance.value() < 10){
Bot.sendMessage("_❌ You Have To Own At Least 10 Gamo Point !_")
}else{
Bot.runCommand("last_run_to")
}}}
