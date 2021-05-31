/*CMD
  command: guess2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var gues = User.getProperty("guess")
var gas = gues / 10
var gint = Libs.Random.randomInt(1, 30);
var gue = gas * 2.5
var balance = Libs.ResourcesLib.userRes("balance")

if ((message > 30) | (message < 1)){
Bot.sendMessage("❌ Number needs to be between 1 and 30")
Bot.runCommand("#️⃣ Guess")
}else{
if (message == gint){
Bot.sendMessage("*🎉 HURRAY!!!, You Won*\nYour balance has topped "+gue+" Gamo")
balance.add(gue)
}else{
var butt = [{ title: "⚡ Play again",command: "#️⃣ Guess" }]
Bot.sendInlineKeyboard(butt, "😢 Ooooh!, You Lost")
}}
