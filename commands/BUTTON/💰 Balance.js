/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var now = new Date();
var balance = Libs.ResourcesLib.userRes("balance")
var stake = User.getProperty("emj")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*🧑🏻‍💻 User = "+user.first_name+"\n\n💰 Balance = "+balance.value().toFixed(2)+" Gamo*"+stake+now)
