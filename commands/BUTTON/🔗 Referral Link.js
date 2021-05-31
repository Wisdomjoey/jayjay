/*CMD
  command: 🔗 Referral Link
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Banned*");
}else{
let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("➕ Total Invites : "+refList.length+" Users\n\n⛔️ Per Referral 0.15 Gamo Point\n\n🔗 Referral Link ⬇️\n"+reflink);
}


