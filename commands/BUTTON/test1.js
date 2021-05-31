/*CMD
  command: test1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BUTTON

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })
Bot.sendMessage("Joy")
