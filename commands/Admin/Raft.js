/*CMD
  command: Raft
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var rafb = [[{ title: "🛎️ Announce Winner",command: "rafstat1" },{ title: "📍 Raffle Status",command: "rafstat2" }],[{ title: "⚙️ Set Winner",command: "rafstat3" }]]

Bot.sendInlineKeyboard(rafb, "💌 When you announce winner make sure to add balance and send private message, Use Raffle status to close and open raffle draw and lastly Set winner before announcing winner")
