/*CMD
  command: raft
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: _Ticket_
  keyboard: ↩️ Back
  aliases: 
CMD*/

var rab = [{ title: "🛒 Purchase Ticket", command: "raft1" }]
var ticket = User.getProperty("ticket")

if (ticket == undefined){
Bot.sendInlineKeyboard(rab, "You Currently Have\n_Ticket_: 0\n\nPurchase ticket to enroll for *Raffle Draw*")
}else{
Bot.sendInlineKeyboard(rab, "You Currently Have\n_Ticket_: "+ticket+"\n\nPurchase more to increase chances of winning")
}
