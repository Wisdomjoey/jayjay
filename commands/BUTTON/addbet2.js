/*CMD
  command: addbet2
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
var odd1_x = User.getProperty("odd1_x")
var odd2_x = User.getProperty("odd2_x")
var odd3_x = User.getProperty("odd3_x")
var odd4_x = User.getProperty("odd4_x")
var odd5_x = User.getProperty("odd5_x")
var odd6_x = User.getProperty("odd6_x")
var odd7_x = User.getProperty("odd7_x")
var odd8_x = User.getProperty("odd8_x")
var odd9_x = User.getProperty("odd9_x")
var odd10_x = User.getProperty("odd10_x")
var ra1_X = Bot.getProperty("ra1_X")
var ra2_X = Bot.getProperty("ra2_X")
var ra3_X = Bot.getProperty("ra3_X")
var ra4_X = Bot.getProperty("ra4_X")
var ra5_X = Bot.getProperty("ra5_X")
var ra6_X = Bot.getProperty("ra6_X")
var ra7_X = Bot.getProperty("ra7_X")
var ra8_X = Bot.getProperty("ra8_X")
var ra9_X = Bot.getProperty("ra9_X")
var ra10_X = Bot.getProperty("ra10_X")
var manu = User.getProperty("manu")
var man = manu / 10
var man1 = man * 10
var man2 = man1 + 1
var betrand = Libs.Random.randomInt(1000000000, 9999999999);
var oddn = User.getProperty("oddn")

if (odd1 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m1+" vs "+m2+"\n_play_: _X_    _odd_: "+ra1_X+"\n","string")
User.setProperty("odd1_x",1,"integer")
User.setProperty("oddn",ra1_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd1_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra1 = oddn + ra1_X
User.setProperty("betslip",betslip+man2+". "+m1+" vs "+m2+"\n_play:_ _X_    _odd_:"+ra1_X+"\n")
User.setProperty("oddn",ra1,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd2 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m3+" vs "+m4+"\n_play_: _X_    _odd_: "+ra2_X+"\n","string")
User.setProperty("odd2_x",1,"integer")
User.setProperty("oddn",ra2_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd2_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra2 = oddn + ra2_X
User.setProperty("betslip",betslip+man2+". "+m3+" vs "+m4+"\n_play:_ _X_    _odd_: "+ra2_X+"\n")
User.setProperty("oddn",ra2,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd3 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m5+" vs "+m6+"\n_play_: _X_    _odd_: "+ra3_X+"\n","string")
User.setProperty("odd3_x",1,"integer")
User.setProperty("oddn",ra3_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd3_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra3 = oddn + ra3_X
User.setProperty("betslip",betslip+man2+". "+m5+" vs "+m6+"\n_play:_ _X_    _odd_: "+ra3_X+"\n")
User.setProperty("oddn",ra3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd4 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m7+" vs "+m8+"\n_play_: _X_    _odd_: "+ra4_X+"\n","string")
User.setProperty("odd4_x",1,"integer")
User.setProperty("oddn",ra4_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd4_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra4 = oddn + ra4_X
User.setProperty("betslip",betslip+man2+". "+m7+" vs "+m8+"\n_play:_ _X_    _odd_: "+ra4_X+"\n")
User.setProperty("oddn",ra4,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd5 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m9+" vs "+m10+"\n_play_: _X_    _odd_: "+ra5_X+"\n","string")
User.setProperty("odd5_x",1,"integer")
User.setProperty("oddn",ra5_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd5_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra5 = oddn + ra5_X
User.setProperty("betslip",betslip+man2+". "+m9+" vs "+m10+"\n_play:_ _X_    _odd_: "+ra5_X+"\n")
User.setProperty("oddn",ra5,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd6 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m11+" vs "+m12+"\n_play_: _X_    _odd_: "+ra6_X+"\n","string")
User.setProperty("odd6_x",1,"integer")
User.setProperty("oddn",ra6_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd6_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra6 = oddn + ra6_X
User.setProperty("betslip",betslip+man2+". "+m11+" vs "+m12+"\n_play:_ _X_    _odd_: "+ra6_X+"\n")
User.setProperty("oddn",ra6,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd7 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m13+" vs "+m14+"\n_play_: _X_    _odd_: "+ra7_X+"\n","string")
User.setProperty("odd7_x",1,"integer")
User.setProperty("oddn",ra7_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd7_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra7 = oddn + ra7_X
User.setProperty("betslip",betslip+man2+". "+m13+" vs "+m14+"\n_play:_ _X_    _odd_: "+ra7_X+"\n")
User.setProperty("oddn",ra7,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd8 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m15+" vs "+m16+"\n_play_: _X_    _odd_: "+ra8_X+"\n","string")
User.setProperty("odd8_x",1,"integer")
User.setProperty("oddn",ra8_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd8_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra8 = oddn + ra8_X
User.setProperty("betslip",betslip+man2+". "+m15+" vs "+m16+"\n_play:_ _X_    _odd_: "+ra8_X+"\n")
User.setProperty("oddn",ra8,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd9 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m17+" vs "+m18+"\n_play_: _X_    _odd_: "+ra9_X+"\n","string")
User.setProperty("odd9_x",1,"integer")
User.setProperty("oddn",ra9_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd9_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra9 = oddn + ra9_X
User.setProperty("betslip",betslip+man2+". "+m17+" vs "+m18+"\n_play:_ _X_    _odd_: "+ra9_X+"\n")
User.setProperty("oddn",ra9,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd10 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron-"+betrand+"_\n______________________________\n\n1. "+m19+" vs "+m20+"\n_play:_ _X_    _odd_: "+ra10_X+"\n","string")
User.setProperty("odd10_x",1,"integer")
User.setProperty("oddn",ra10_X,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd10_x == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra10 = oddn + ra10_X
User.setProperty("betslip",betslip+man2+". "+m19+" vs "+m20+"\n_play:_ _X_    _odd_: "+ra10_X+"\n")
User.setProperty("oddn",ra10,"integer")
User.setProperty("manu",man2,"integer")
}}}}}}}}
}}}}
