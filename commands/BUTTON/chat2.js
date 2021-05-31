/*CMD
  command: chat2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BUTTON
  answer: *Resend User Id*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("reptgid",message,"string")
Bot.runCommand("chat3")
