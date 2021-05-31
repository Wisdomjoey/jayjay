/*CMD
  command: /trans1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: *Send Amount*
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(message);
var trtgid = User.getProperty("trid");
let res = Libs.ResourcesLib.anotherUserRes("balance", trtgid);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully Transferred* \n👤 User = "+tgid+"\n💰 Amount= "+amount+);
Bot.sendMessageToChatWithId(trtgid, user.firstname+" Transferred "+amount"to you")
