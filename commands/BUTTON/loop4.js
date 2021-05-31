/*CMD
  command: loop4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty("game","Ended","string")
var m1 = Bot.getProperty("m1")
var m2 = Bot.getProperty("m2")
var m3 = Bot.getProperty("m3")
var m4 = Bot.getProperty("m4")
var m5 = Bot.getProperty("m5")
var m6 = Bot.getProperty("m6")
var m7 = Bot.getProperty("m7")
var m8 = Bot.getProperty("m8")
var m9 = Bot.getProperty("m9")
var m10 = Bot.getProperty("m10")
var m11 = Bot.getProperty("m11")
var m12 = Bot.getProperty("m12")
var m13 = Bot.getProperty("m13")
var m14 = Bot.getProperty("m14")
var m15 = Bot.getProperty("m15")
var m16 = Bot.getProperty("m16")
var m17 = Bot.getProperty("m17")
var m18 = Bot.getProperty("m18")
var m19 = Bot.getProperty("m19")
var m20 = Bot.getProperty("m20")
var m1res = Bot.getProperty("m1res")
var m2res = Bot.getProperty("m2res")
var m3res = Bot.getProperty("m3res")
var m4res = Bot.getProperty("m4res")
var m5res = Bot.getProperty("m5res")
var m6res = Bot.getProperty("m6res")
var m7res = Bot.getProperty("m7res")
var m8res = Bot.getProperty("m8res")
var m9res = Bot.getProperty("m9res")
var m10res = Bot.getProperty("m10res")
var m11res = Bot.getProperty("m11res")
var m12res = Bot.getProperty("m12res")
var m13res = Bot.getProperty("m13res")
var m14res = Bot.getProperty("m14res")
var m15res = Bot.getProperty("m15res")
var m16res = Bot.getProperty("m16res")
var m17res = Bot.getProperty("m17res")
var m18res = Bot.getProperty("m18res")
var m19res = Bot.getProperty("m19res")
var m20res = Bot.getProperty("m20res")
var matchres = "               _Match Results_               \n\n1.  "+m1+" "+m1res+" - "+m2res+" "+m2+"\n2.  "+m3+" "+m3res+" - "+m4res+" "+m4+"\n3.  "+m5+" "+m5res+" - "+m6res+" "+m6+"\n4.  "+m7+" "+m7res+" - "+m8res+" "+m8+"\n5.  "+m9+" "+m9res+" - "+m10res+" "+m10+"\n6.  "+m11+" "+m11res+" - "+m12res+" "+m12+"\n7.  "+m13+" "+m13res+" - "+m14res+" "+m14+"\n8.  "+m15+" "+m15res+" - "+m16res+" "+m16+"\n9.  "+m17+" "+m17res+" - "+m18res+" "+m18+"\n10.  "+m19+" "+m19res+" - "+m20res+" "+m20+""

Bot.setProperty("matchres",matchres,"string")
Bot.runCommand("setmatch")
