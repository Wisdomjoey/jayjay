/*CMD
  command: roll3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var frran = Libs.Random.randomInt(1,8);
var frran1 = Libs.Random.randomInt(1,8);
var frran2 = Libs.Random.randomInt(1,8);
var fr = Bot.getProperty("fr"+frran)
var fr1 = Bot.getProperty("fr"+frran1)
var fr2 = Bot.getProperty("fr"+frran2)
var v1 = Libs.Random.randomInt(1,20);
var v2 = Libs.Random.randomInt(1,20);
var v3 = Libs.Random.randomInt(1,20);
var rolls = User.getProperty("roll")
var balance = Libs.ResourcesLib.userRes("balance")
var rol = rolls / 10
var ro = rol * 7
var ro1 = rol * 5
var ro2 = rol * 4
var ro3 = rol * 3
var ro4 = rol * 2.5
var ro5 = rol * 2
var ro6 = rol * 1.5
var ro7 = rol * 1.3
var ro8 = rol * 1.1
var ro9 = rol * 1.05
var bee = [{ title: "⭕ Spin",command: "roll1" }]


if ((v1 == 1) & (v2 == 1) & (v3 == 1)){
Bot.sendMessage("🍊")
Bot.sendMessage("🍊")
Bot.sendMessage("🍊")
balance.add(ro1)
Bot.sendInlineKeyboard(bee, "*Wooow!! Amazing!*\n\nYour outcome = 🍊🍊🍊\nYou Won = "+ro1+" Gamo")
}else{
if ((v1 == 1) & (v2 == 1)){
Bot.sendMessage("🍊")
Bot.sendMessage("🍊")
Bot.sendMessage(fr)
balance.add(ro3)
Bot.sendInlineKeyboard(bee, "*Woow!! Great!*\n\nYour outcome = 🍊🍊"+fr+"\nYou Won = "+ro3+" Gamo")
}else{
if ((v1 == 1) & (v3 == 1)){
Bot.sendMessage("🍊")
Bot.sendMessage(fr)
Bot.sendMessage("🍊")
balance.add(ro3)
Bot.sendInlineKeyboard(bee, "*Woow!! Great!*\n\nYour outcome = 🍊"+fr+"🍊\nYou Won = "+ro3+" Gamo")
}else{
if ((v2 == 1) & (v3 == 1)){
Bot.sendMessage(fr)
Bot.sendMessage("🍊")
Bot.sendMessage("🍊")
balance.add(ro3)
Bot.sendInlineKeyboard(bee, "*Woow!! Great!*\n\nYour outcome = "+fr+"🍊🍊\nYou Won = "+ro3+" Gamo")
}else{
if ((v1 == 2) & (v2 == 2) & (v3 == 2)){
Bot.sendMessage("🍓")
Bot.sendMessage("🍓")
Bot.sendMessage("🍓")
balance.add(ro2)
Bot.sendInlineKeyboard(bee, "*Wooow!! Impressive!*\n\nYour outcome = 🍓🍓🍓\nYou Won = "+ro2+" Gamo")
}else{
if ((v1 == 2) & (v2 == 2)){
Bot.sendMessage("🍓")
Bot.sendMessage("🍓")
Bot.sendMessage(fr)
balance.add(ro4)
Bot.sendInlineKeyboard(bee, "*Wow!! Nice!*\n\nYour outcome = 🍓🍓"+fr+"\nYou Won = "+ro4+" Gamo")
}else{
if ((v1 == 2) & (v3 == 2)){
Bot.sendMessage("🍓")
Bot.sendMessage(fr)
Bot.sendMessage("🍓")
balance.add(ro4)
Bot.sendInlineKeyboard(bee, "*Wow!! Nice!*\n\nYour outcome = 🍓"+fr+"🍓\nYou Won = "+ro4+" Gamo")
}else{
if ((v2 == 2) & (v3 == 2)){
Bot.sendMessage(fr)
Bot.sendMessage("🍓")
Bot.sendMessage("🍓")
balance.add(ro4)
Bot.sendInlineKeyboard(bee, "*Wow!! Nice!*\n\nYour outcome = "+fr+"🍓🍓\nYou Won = "+ro4+" Gamo")
}else{
if ((v1 == 3) & (v2 == 3)){
Bot.sendMessage("🍇")
Bot.sendMessage("🍇")
Bot.sendMessage(fr)
balance.add(ro5)
Bot.sendInlineKeyboard(bee, "*Great!!!*\n\nYour outcome = 🍇🍇"+fr+"\nYou Won = "+ro5+" Gamo")
}else{
if ((v1 == 3) & (v3 == 3)){
Bot.sendMessage("🍇")
Bot.sendMessage(fr)
Bot.sendMessage("🍇")
balance.add(ro5)
Bot.sendInlineKeyboard(bee, "*Great!!!*\n\nYour outcome = 🍇"+fr+"🍇\nYou Won = "+ro5+" Gamo")
}else{
if ((v2 == 3) & (v3 == 3)){
Bot.sendMessage(fr)
Bot.sendMessage("🍇")
Bot.sendMessage("🍇")
balance.add(ro5)
Bot.sendInlineKeyboard(bee, "*Great!!!*\nYour outcome = "+fr+"🍇🍇\nYou Won = "+ro5+" Gamo")
}else{
if ((v1 == 4) & (v2 == 4)){
Bot.sendMessage("🍒")
Bot.sendMessage("🍒")
Bot.sendMessage(fr)
balance.add(ro6)
Bot.sendInlineKeyboard(bee, "*Good!!*\n\nYour outcome = 🍒🍒"+fr+"\nYou Won = "+ro6+" Gamo")
}else{
if ((v1 == 4) & (v3 == 4)){
Bot.sendMessage("🍒")
Bot.sendMessage(fr)
Bot.sendMessage("🍒")
balance.add(ro6)
Bot.sendInlineKeyboard(bee, "*Good!!*\n\nYour outcome = 🍒"+fr+"🍒\nYou Won = "+ro6+" Gamo")
}else{
if ((v2 == 4) & (v3 == 4)){
Bot.sendMessage(fr)
Bot.sendMessage("🍒")
Bot.sendMessage("🍒")
balance.add(ro6)
Bot.sendInlineKeyboard(bee, "*Good!!*\n\nYour outcome = "+fr+"🍒🍒\nYou Won = "+ro6+" Gamo")
}else{
if ((v1 == 5) & (v2 == 5)){
Bot.sendMessage("🍉")
Bot.sendMessage("🍉")
Bot.sendMessage(fr)
balance.add(ro7)
Bot.sendInlineKeyboard(bee, "*Good*\n\nYour outcome = 🍉🍉"+fr+"\nYou Won = "+ro7+" Gamo")
}else{
if ((v1 == 5) & (v3 == 5)){
Bot.sendMessage("🍉")
Bot.sendMessage(fr)
Bot.sendMessage("🍉")
balance.add(ro7)
Bot.sendInlineKeyboard(bee, "*Good*\nYour outcome = 🍉"+fr+"🍉\nYou Won = "+ro7+" Gamo")
}else{
if ((v2 == 5) & (v3 == 5)){
Bot.sendMessage(fr)
Bot.sendMessage("🍉")
Bot.sendMessage("🍉")
balance.add(ro7)
Bot.sendInlineKeyboard(bee, "*Good*\nYour outcome = "+fr+"🍉🍉\nYou Won = "+ro7+" Gamo")
}else{
if (v1 == 6){
Bot.sendMessage("🍋")
Bot.sendMessage(fr)
Bot.sendMessage(fr1)
balance.add(ro8)
Bot.sendInlineKeyboard(bee, "*Not bad*\n\nYour outcome = 🍋"+fr+fr1+"\nYou Won = "+ro8+" Gamo")
}else{
if (v2 == 6){
Bot.sendMessage(fr)
Bot.sendMessage("🍋")
Bot.sendMessage(fr1)
balance.add(ro8)
Bot.sendInlineKeynoard(bee, "*Not Bad*\n\nYour outcome = "+fr+"🍋"+fr1+"\nYou Won = "+ro8+" Gamo")
}else{
if (v3 == 6){
Bot.sendMessage(fr)
Bot.sendMessage(fr1)
Bot.sendMessage("🍋")
balance.add(ro8)
Bot.sendInlineKeyboard(bee, "*Not Bad*\n\nYour outcome = "+fr+fr1+"🍋\nYou Won = "+ro8+" Gamo")
}else{
if (v1 == 7){
Bot.sendMessage("🍎")
Bot.sendMessage(fr)
Bot.sendMessage(fr1)
balance.add(ro9)
Bot.sendInlineKeyboard(bee, "*Not bad*\n\nYour outcome = 🍎"+fr+fr1+"\nYou Won = "+ro9+" Gamo")
}else{
if (v2 == 7){
Bot.sendMessage(fr)
Bot.sendMessage("🍎")
Bot.sendMessage(fr1)
balance.add(ro9)
Bot.sendInlineKeyboard(bee, "*Not Bad*\n\nYour outcome = "+fr+"🍎"+fr1+"\nYou Won = "+ro9+" Gamo")
}else{
if (v3 == 7){
Bot.sendMessage(fr)
Bot.sendMessage(fr1)
Bot.sendMessage("🍎")
balance.add(ro9)
Bot.sendInlineKeyboard(bee, "*Not Bad*\n\nYour outcome = "+fr+fr1+"🍎\nYou Won = "+ro9+" Gamo")
}else{
if ((v1 == 1) & (v2 == 2) & (v3 == 3)){
Bot.sendMessage("🍊")
Bot.sendMessage("🍓")
Bot.sendMessage("🍇")
balance.add(ro)
Bot.sendInlineKeyboard(bee, "*Wooow!! Incredible!*\nYour outcome = 🍊🍓🍇\nYou Won = "+ro+" Gamo")
}else{
if ((v1 == 2) & (v2 == 3) & (v3 == 1)){
Bot.sendMessage("🍓")
Bot.sendMessage("🍇")
Bot.sendMessage("🍊")
balance.add(ro)
Bot.sendInlineKeyboard(bee, "*Wooow!! Incredible!*\n\nYour outcome = 🍓🍇🍊\nYou Won = "+ro+" Gamo")
}else{
if ((v1 == 3) & (v2 == 1) & (v3 == 2)){
Bot.sendMessage("🍇")
Bot.sendMessage("🍊")
Bot.sendMessage("🍓")
balance.add(ro)
Bot.sendInlineKeyboard(bee, "*Wooow!! Incredible!*\n\nYour outcome = 🍇🍊🍓\nYou Won = "+ro+" Gamo")
}else{
Bot.sendMessage(fr)
Bot.sendMessage(fr1)
Bot.sendMessage(fr2)
Bot.sendInlineKeyboard(bee, "*Sorry You Lose*\n\nYour outcome = "+fr+fr1+fr2+"\nYou lost = "+rol+" Gamo")
}
}}}}}}}}}}}}}}}}}}}}}}}}}
