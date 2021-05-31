/*CMD
  command: dart
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })

var balance = Libs.ResourcesLib.userRes("balance")

if (balance.value() < 1){
Bot.sendMessage("👀 Seems your balance is too low")
}else{
Bot.sendMessage("✨ Good to go")
Bot.runCommand("dart$")
}
