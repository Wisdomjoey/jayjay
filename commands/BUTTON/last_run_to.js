/*CMD
  command: last_run_to
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

function canRun(){
  var last_run_to = User.getProperty("last_run_to");
  if(!last_run_to){ return true }
  
  var minutes = (Date.now() - last_run_to) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 You have already made a Withdrawal Today\nYou can only Withdraw once every 24hrs\n\n▶️ Come Back After ⏳ "+wait_hours+" h "+wait_minutes+" m " 
 + seconds+ " s*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_to", Date.now(), "integer");

Bot.sendMessage("*📤 Enter Amount You Want To Withdraw *")
Bot.runCommand("Auto")
