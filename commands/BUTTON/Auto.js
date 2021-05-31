/*CMD
  command: Auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("↩️ Back", "⚡ ############ ⚡")

var wit = User.getProperty("wit")

var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(message < 5 ){
Bot.sendMessage("_❌ Minimum Withdraw 5 TRX_")
}else{
if(message > balance.value()){
Bot.sendMessage("_❌ Maximum Withdraw "+balance.value().toFixed(6)+" TRX_")
}else{
Bot.sendMessage("*📤 Withdrawal Sent 📤\n\n💳 Transaction Details:*\n _Generating...._")
Bot.sendMessage("💰 Amount = "+message+" TRX\n💼 Wallet = "+wallet+"\n\n⛔ It May Take Upto 12 Hours To Complete Your Payment⏰*")
balance.add(-message)
Api.sendMessage({ 
chat_id: "@Black_Tron_Payout_Channel", 
text: "*💸 New Approved Payout 💸\n\n📌 Status = ✅ Confirmed\n\n👤 User = "+user.first_name+"\n🆔 User ID = "+user.telegramid+"\n💰 Amount = "+message+" TRX*\n*💼 TRX Wallet =* "+"_"+wallet+"_"+"\n\n*🔶 Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
}}
Bot.sendMessageToChatWithId(1527336418, "📌 New User Withdraw Requested.\n\n❤️Name :- "+user.first_name+"\n❤️Id :- "+user.telegramid+"\n❤️Amount :- "+message+"\n\n❣Bot :- [@"+bot.name+"]")
var mag = message / 10

if (wit == 10000000){
var mag1 = mag * 10
var aut = 10000000 + mag1
var aut1 = aut - 10000000
User.setProperty("wit",aut1,"integer")
}else{
var wits = wit / 10
var wite = wits * 10
var aut2 = wite + message
User.setProperty("wit",aut2,"integer")
}
