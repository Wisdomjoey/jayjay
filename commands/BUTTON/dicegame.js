/*CMD
  command: dicegame
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if ((message > 0) & (message < 7)){
Api.sendDice({ 
    on_result: "on_dice " + message, 
    emoji: "🎲" 
})
}else{
Bot.sendMessage("❌ Error")
Bot.sendMessage("This is a dice game ...\n\nEnter numbers between 1 - 6 only ...")
}
