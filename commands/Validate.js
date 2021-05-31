/*CMD
  command: Validate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{
let channel1 = "@gameotorium_studio";
let channel2 = "@gameotorium_payout";
let channel3 = "@gameotorium_buycodes";
let channel4 = "@gameotorium_botgroup";
let id = user.telegramid
Api.getChatMember({ 
chat_id : channel1,
chat_id : channel2,
chat_id : channel3,
chat_id : channel4,
user_id : id,
on_result : "check"})
}
