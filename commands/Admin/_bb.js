/*CMD
  command: /bb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *🖋 How Much Amount You To Add In User Balance*
  keyboard: 
  aliases: 
CMD*/

var key = "1527336418"
if (user.telegramid == key){
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully Added Balance* \n*👤 User = "+tgid+"\n💰 Amount= "+amount+"*");
}else{
return
}
Bot.runCommand("depomsgconfirm")
