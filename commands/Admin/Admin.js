/*CMD
  command: Admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = 1527336418
if (user.telegramid == admin){
var button = [
[{title: "🎙️Broadcast", command: "Broadcast"},{title: "🔮 Raffle Draw 🔮",command: "Raft"}],[{title: "⭕ Start Loop",command: "setmatch"},{title: "⛔ Stop Loop",command: "stop"}],[{title: "⚠️Ban", command: "/ban"},{title: "🔓Unban", command: "/unban"}],[{title:"🕹️Change Balance", command: "/abd"}],[{title: "♦️Make Card", command: "MakeGift"},{title: "📤Send Message", command: "/msg"}],[{title: "💡Change Start Channel",command: "ChangeSChannel"}],[{title:"➕Add Admin", command: "AddAdmin"},{title: "➖ Admin", command: "RemoveAdmin"}],[{title:"📤Send Bot", command: "SendBot"},{title: "🎁Change Bonus", command: "ChangeBonus"}],[{title: "💠Change Payment Channel",command: "ChangePChannel"}],[{title: "💼Find User Balance", command: "/checkb"}],[{title: "💰 Minimum Withdraw", command: "MinWith"}],[{title: "⚙️Set Refer Bonus", command: "ReferBonus"},{ title: "📥 Deposit Alert",command: "depomsgconfirm"}],[{ title : "💸 Withdraw Alert",command : "withmsgconfirm"},{ title : "♻️ Re-invest Alert",command : "remsgconfirm"}],[{ title : "🔃 Generate wallet",command : "randwalt" },{ title : "🔃 Generate Names",command : "randnam" }],[{ title : "👨 User Investment Alert",command : "usinval" }]
];
Bot.sendInlineKeyboard(button, "Welcome ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n🌐Coded By [Wizzy](https://t.me/WisdomJonathan529)")
}else{
Bot.sendMessage("You Are Not An Admin")
}
