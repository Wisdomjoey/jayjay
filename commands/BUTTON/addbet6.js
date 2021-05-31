/*CMD
  command: addbet6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

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
var odd1 = User.getProperty("odd1")
var odd2 = User.getProperty("odd2")
var odd3 = User.getProperty("odd3")
var odd4 = User.getProperty("odd4")
var odd5 = User.getProperty("odd5")
var odd6 = User.getProperty("odd6")
var odd7 = User.getProperty("odd7")
var odd8 = User.getProperty("odd8")
var odd9 = User.getProperty("odd9")
var odd10 = User.getProperty("odd10")
var betslip = User.getProperty("betslip")
var odd1_2X = User.getProperty("odd1_2X")
var odd2_2X = User.getProperty("odd2_2X")
var odd3_2X = User.getProperty("odd3_2X")
var odd4_2X = User.getProperty("odd4_2X")
var odd5_2X = User.getProperty("odd5_2X")
var odd6_2X = User.getProperty("odd6_2X")
var odd7_2X = User.getProperty("odd7_2X")
var odd8_2X = User.getProperty("odd8_2X")
var odd9_2X = User.getProperty("odd9_2X")
var odd10_2X = User.getProperty("odd10_2X")
var manu = User.getProperty("manu")
var man = manu / 10
var man1 = man * 10
var man2 = man1 + 1
var odds = Libs.Random.randomFloat(1, 3.5);
var betrand = Libs.Random.randomInt(1000000000, 9999999999);
var oddn = User.getProperty("oddn")
var odds1 = odds.toFixed(2)
var oddn1 = oddn / 10
var oddn2 = oddn1 * 10
var oddn3 = oddn2 + odds1

if (odd1 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m1+" vs "+m2+"\n_play_: _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd1_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd1_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m1+" vs "+m2+"\n_play:_ _2X_    _odd_:"+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd2 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m3+" vs "+m4+"\n_play_: _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd2_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd2_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m3+" vs "+m4+"\n_play:_ _2X_    _odd_: "+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd3 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m5+" vs "+m6+"\n_play_: _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd3_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd3_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m5+" vs "+m6+"\n_play:_ _2X_    _odd_: "+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd4 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m7+" vs "+m8+"\n_play_: _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd4_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd4_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m7+" vs "+m8+"\n_play:_ _2X_    _odd_: "+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd5 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m9+" vs "+m10+"\n_play_: _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd5_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd5_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m9+" vs "+m10+"\n_play:_ _2X_    _odd_: "+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd6 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m11+" vs "+m12+"\n_play_: _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd6_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd6_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m11+" vs "+m12+"\n_play:_ _2X_    _odd_: "+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd7 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m13+" vs "+m14+"\n_play_: _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd7_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd7_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m13+" vs "+m14+"\n_play:_ _2X_    _odd_: "+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd8 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m15+" vs "+m16+"\n_play_: _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd8_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd8_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m15+" vs "+m16+"\n_play:_ _2X_    _odd_: "+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd9 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m17+" vs "+m18+"\n_play_: _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd9_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd9_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m17+" vs "+m18+"\n_play:_ _2X_    _odd_: "+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd10 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron-"+betrand+"_\n______________________________\n\n1. "+m19+" vs "+m20+"\n_play:_ _2X_    _odd_: "+odds1+"\n","string")
User.setProperty("odd10_2X",1,"integer")
User.setProperty("oddn",odds1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd10_2X == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
User.setProperty("betslip",betslip+man2+". "+m19+" vs "+m20+"\n_play:_ _2X_    _odd_: "+odds1+"\n")
User.setProperty("oddn",oddn3,"integer")
User.setProperty("manu",man2,"integer")
}}}}}}}}
}}}}
