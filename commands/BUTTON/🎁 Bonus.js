/*CMD
  command: 🎁 Bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var tob = User.getProperty("tob")

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*😉 You have already received a bonus Today\n\n⌚ Come Back After ⏳ "+wait_hours+" h "+wait_minutes+" m " 
 + seconds+ " s*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(0.05)
Bot.sendMessage(
  "Your Bonus- *0.05* Gamo Point *ADDED*"
)
if (tob == 10000000){
var tob1 = 1
User.setProperty("tob",tob1,"integer")
}else{
var tob2 = tob + 1
User.setProperty("tob",tob2,"integer")
}
