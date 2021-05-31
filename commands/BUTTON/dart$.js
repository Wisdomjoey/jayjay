/*CMD
  command: dart$
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: *🔻 Send Stake*
  keyboard: 
  aliases: 
CMD*/

if (message < 1){
Bot.sendMessage("❌ Sorry but minimum stake is 1 Gamo")
}else{
User.setProperty("dast",message,"integer")
Api.sendDice({ 
    on_result: "result1", 
    emoji: "🎯" 
})
}
