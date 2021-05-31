/*CMD
  command: 🎖️ Referral Details
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "➕ Total users: " + refList.length + "\n------------------";
  for(var i in refList){
    user = refList[i];
    msg+= "\n👤 " +  user.first_name + "";
  }
}else{
  msg = "YOU Haven't REFERRED ANY USER ❌❌";
}
Bot.sendMessage(msg);
