/*CMD
  command: check
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var totus = Bot.getProperty("totus")
var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("/welco")
User.addToGroup("user")
Bot.sendMessage("")
if (totus == undefined){
var tot = 1
Bot.setProperty("totus",tot,"integer")
User.setProperty("totas",tot,"integer")
}else{
var totas = User.getProperty("totas")
var totus1 = Bot.getProperty("totus")
if (totas == 1){
Bot.setProperty("totus",totus1,"integer")
}else{
var tots = totus * 10
var tot1 = tots / 10
var tot2 = tot1 + 1
Bot.setProperty("totus",tot2,"string")
}
}}

if (user=="left"){
Bot.sendMessage("*❌ Must Join All Channel*")
}
