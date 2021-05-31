/*CMD
  command: ball$
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
User.setProperty("balst",message,"integer")
Api.sendDice({ 
    on_result: "result", 
    emoji: "🏀" 
})
}
