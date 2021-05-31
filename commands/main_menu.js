/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ↩️ back
CMD*/

var userstat = User.getProperty("status");
var tob = User.getProperty("tob")
var wit = User.getProperty("wit")
var bet = User.getProperty("bet")
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){
if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(0.15)
  Bot.sendMessageToChatWithId(refUser.chatId, "You Earned +0.15 Gamo Points\n*New User :* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💰 Balance,👥 Referral,🌟 Buy Points\n💸 Withdraw,💼 Set Wallet,🎁 Bonus\n📌 Status,☎️ Support, 💣 Extra\n🛑 Enter Game Zone 🛑", "*Your Menu*")
}


if (user=="left"){
Bot.runCommand("/start");
}
var to = 10000000
if (tob == undefined){
User.setProperty("tob",to,"integer");
}
if (wit == undefined){
User.setProperty("wit",to,"integer");
}
if (bet == undefined){
User.setProperty("bet",to,"integer");
}
