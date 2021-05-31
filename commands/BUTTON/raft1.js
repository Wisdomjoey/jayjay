/*CMD
  command: raft1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ticket = User.getProperty("ticket")
var entries = Bot.getProperty("entry")
var balance = Libs.ResourcesLib.userRes("balance")
var raffid = User.getProperty("raffid")
var rafid = Libs.Random.randomInt(1000000,9999999);

if (balance.value() < 5){
Bot.sendKeyboard("↩️ Back", "❌ Balance is too low.\nYou need at least 5 Gamo to qualify for *Raffle Draw*")
}else{
if (ticket == undefined){
if (entries == undefined){
Bot.setProperty("entry",1,"integer")
Bot.sendKeyboard("↩️ Back", "💢 *Great* 💢\n\nYou just enrolled for next *Raffle Draw*")
Bot.sendMessage("----------_TICKET ID_----------\n\nRaffle id: #"+rafid+"\nName: "+user.first_name+"\nUser Id: "+user.telegramid+"\nTotal ticket: 1\n⚠️ Save your *Raffle Id* you will use it to claim reward\n\n_Wait for draw_")
User.setProperty("raffid",rafid,"string")
User.setProperty("ticket",1,"integer")
var ent = Bot.getProperty("entry")
Bot.sendMessageToChatWithId(1527336418, "🔮 *NEW RAFFLE ENTRY* 🔮\n\nRaffle id: #"+rafid+"\nName: "+user.first_name+"\nUser Id: "+user.telegramid+")\n\nTotal Entries: "+ent)
balance.add(-5)
Bot.run({
command : "raft2",
run_after : 1*60*60*20,
});
var toe = User.getProperty("raffid")
Bot.setProperty("rafcont",user.first_name+" "+user.telegramid+" #"+toe+"\n","string")
}else{
Bot.sendKeyboard("↩️ Back", "💢 *Great* 💢\n\nYou just enrolled for next *Raffle Draw*")
Bot.sendMessage("----------_TICKET ID_----------\n\nRaffle id: #"+rafid+"\nName: "+user.first_name+"\nUser Id: "+user.telegramid+"\nTotal ticket: 1\n⚠️ Save your *Raffle Id* you will use it to claim reward\n\n_Wait for draw_")
User.setProperty("raffid",rafid,"string")
User.setProperty("ticket",1,"integer")
var ent1 = Bot.getProperty("entry")
Bot.sendMessageToChatWithId(1527336418, "🔮 *NEW RAFFLE ENTRY* 🔮\n\nRaffle id: #"+rafid+"\nName: "+user.first_name+"\nUser Id: "+user.telegramid+"\n\nTotal Entries: "+ent1)
balance.add(-5)
Bot.run({
command : "raft2",
run_after : 1*60*60*20,
});
var rafc1 = Bot.getProperty("rafcont")

Bot.setProperty("rafcont",rafc1+user.first_name+" "+user.telegramid+" #"+rafid+"\n","string")
}
}else{
var tic = ticket / 10
var tic1 = tic * 10
var tic2 = tic1 + 1
var entry = entries / 10
var entri = entry * 10
var entrie = entri + 1

Bot.setProperty("entry",entrie,"integer")
Bot.sendKeyboard("↩️ Back", "💢 *Great* 💢\n\nYou just enrolled for next *Raffle Draw*")
Bot.sendMessage("----------_TICKET ID_----------\n\nRaffle id: #"+raffid+"\nName: "+user.first_name+"\nUser Id: "+user.telegramid+"\nTotal ticket: "+tic2+"\n⚠️ Save your *Raffle Id* you will use it to claim reward\n\n_Wait for draw_")
User.setProperty("ticket",tic2,"integer")
var ent1 = Bot.getProperty("entry")
Bot.sendMessageToChatWithId(1527336418, "🔮 *ANOTHER RAFFLE ENTRY* 🔮\n\nRaffle id: #"+raffid+")\nName: "+user.first_name+"\nUser Id: "+user.telegramid+"\n\nTotal Entries: "+ent1)

var rafc2 = Bot.getProperty("rafcont")

Bot.setProperty("rafcont",rafc2+user.first_name+" "+user.telegramid+" #"+raffid+")\n","string")
balance.add(-5)
Bot.run({
command : "raft2",
run_after : 1*60*60*20,
});
}
}
