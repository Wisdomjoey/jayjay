/*CMD
  command: on_dice
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.result.dice.value
var user_input = params
var sta = User.getProperty("stake")
var stet = sta / 10
var ste = stet / 2
var stak = stet * 2
var but = [{ title: "⚡ Play again", command: "first" }]
var balance = Libs.ResourcesLib.userRes("balance")

if(!result || !user_input){return}

if (user_input == result){
Bot.sendMessage("Correct!!\n\nYipee!!")
balance.add(stet)
Bot.sendInlineKeyboard(but, "Congratulations, You Won "+ stak+" Gamo. Check your balance")
}else{
Bot.sendMessage("*You Lost 🤷, Better Luck Next Time! 🤞*")
Bot.sendInlineKeyboard(but, "*The correct number was " + result + "*")
}
