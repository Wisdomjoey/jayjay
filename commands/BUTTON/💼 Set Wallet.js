/*CMD
  command: 💼 Set Wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("🚫 Cancel", "Your wallet")

var button = [{ title : "💼 Set Wallet" , command : "Wallet" }]
var buttn = [{ title : "🖋️ Re-set Wallet", command : "Wallet" }]
var wallet = User.getProperty("wallet")
if (wallet == undefined){
Bot.sendInlineKeyboard(button, "❌ Your Wallet Is Not Yet Set")
}else{
Bot.sendInlineKeyboard(buttn, "*🕹 Account Settings ⚙️\n\n👤 User = "+user.first_name+"\n🆔 User ID = "+user.telegramid+"\n💼 Wallet =* "+"_"+wallet+"_")
}
