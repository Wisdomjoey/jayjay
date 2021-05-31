/*CMD
  command: /abd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: *🖋 Send User Telegram Id To Change His/Her Balance* 
  keyboard: 
  aliases: 
CMD*/

var key = "1527336418"
if (user.telegramid == key){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb");
}else{
return
}
