/*CMD
  command: 🔮 Raffle Draw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("↩️ Back", "*🔮 RAFFLE DRAW 🔮*")

var raft = Bot.getProperty("raft")
var totus = Bot.getProperty("totus")

if (totus == undefined){
Bot.sendMessage("*RAFFLE DRAW* is closed, come back later and check")
}else{
if (totus < 20){
Bot.sendMessage("*RAFFLE DRAW* is closed, come back later and check")
}else{
if (raft == "Open"){
Api.sendPhoto({
photo: "https://t.me/Black_Tron_Official_Channel/8",
caption: "*Buy Tickets*    Wait for draw and if you win you get 50 Gamo\n\nTicket:  5 Gamo"
})
Bot.runCommand("raft")
}else{
Bot.sendMessage("*RAFFLE DRAW* is closed at the moment, come back after 1 hour")
}
}
}
