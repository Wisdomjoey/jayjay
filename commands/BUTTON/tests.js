/*CMD
  command: tests
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BUTTON

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var li = Libs.Random.randomInt(1,6)
User.setProperty("li",li,"integer")
var li1 = User.getProperty("li")
var li2 = li1+5
Bot.sendMessage("here "+li1+5)
Bot.sendMessage("here "+li1)
Bot.sendMessage("here "+li2)

