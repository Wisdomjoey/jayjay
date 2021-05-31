/*CMD
  command: coingame
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: Heads or tails? 🎁
  keyboard: Heads,Tails,\n🔙 Back
  aliases: 
CMD*/

var coin = User.getProperty("coin")
var co = coin / 10
var coil = co * 1.3
let balance = Libs.ResourcesLib.userRes("balance")

let win = Libs.Random.randomInt(1,2);
if (win == 1){
if (message == "Heads"){
Bot.sendMessage("It's a Head!!")
Bot.sendMessage("You won!!")
balance.add(coil)
Bot.sendKeyboard("🔙 Back", "Congrats you just received "+coil+" Gamo")
Bot.runCommand("coins")
}else{
Bot.sendMessage("It's a Head!!")
Bot.sendMessage("You lose!")
Bot.sendKeyboard("🔙 Back", "😢 Sorry, You lost "+co+" Gamo")
Bot.runCommand("coins")
}
}else{
if (message == "Tails"){
Bot.sendMessage("It's a Tails!!")
Bot.sendMessage("You won!!")
balance.add(coil)
Bot.sendKeyboard("🔙 Back", "Congrats you just received "+coil+" Gamo")
Bot.runCommand("coins")
}else{
Bot.sendMessage("It's a Tails!!")
Bot.sendMessage("You lose!")
Bot.sendKeyboard("🔙 Back", "😢 Sorry, You lost "+co+" Gamo")
Bot.runCommand("coins")
}
}
