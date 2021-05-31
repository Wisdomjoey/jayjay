/*CMD
  command: moreodd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var odbut1 = [[{ title: "1X",command: "addbet4" },{ title: "12",command: "addbet5" },{ title: "2X",command: "addbet6" }]]
var odbut2 = [[{ title: "0.5  Over",command: "co1" },{ title: "Under",command: "co2" }],[{ title: "1.5  Over",command: "co3" },{ title: "Under",command: "co4" }],[{ title: "2.5  Over",command: "co5" },{ title: "Under",command: "co6" }],[{ title: "3.5  Over",command: "co7" },{ title: "Under",command: "co8" }],[{ title: "4.5  Over",command: "co9" },{ title: "Under",command: "co10" }],[{ title: "5.5  Over",command: "co11" },{ title: "Under",command: "co12" }],[{ title: "6.5  Over",command: "co13" },{ title: "Under",command: "co14" }],[{ title: "7.5  Over",command: "co15" },{ title: "Under",command: "co16" }]]
var odbut3 = [[{ title: "GG",command: "co17"},{ title: "NG",command: "co18" }]]

Bot.sendInlineKeyboard(odbut1, "*Double Chance*")
Bot.sendInlineKeyboard(odbut2, "*Over / Under*")
Bot.sendInlineKeyboard(odbut3, "*GG / NG*")
