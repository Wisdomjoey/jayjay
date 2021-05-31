/*CMD
  command: addbet1
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
var odd1_1 = User.getProperty("odd1_1")
var odd2_1 = User.getProperty("odd2_1")
var odd3_1 = User.getProperty("odd3_1")
var odd4_1 = User.getProperty("odd4_1")
var odd5_1 = User.getProperty("odd5_1")
var odd6_1 = User.getProperty("odd6_1")
var odd7_1 = User.getProperty("odd7_1")
var odd8_1 = User.getProperty("odd8_1")
var odd9_1 = User.getProperty("odd9_1")
var odd10_1 = User.getProperty("odd10_1")
var ra1_1 = Bot.getProperty("ra1_1")
var ra2_1 = Bot.getProperty("ra2_1")
var ra3_1 = Bot.getProperty("ra3_1")
var ra4_1 = Bot.getProperty("ra4_1")
var ra5_1 = Bot.getProperty("ra5_1")
var ra6_1 = Bot.getProperty("ra6_1")
var ra7_1 = Bot.getProperty("ra7_1")
var ra8_1 = Bot.getProperty("ra8_1")
var ra9_1 = Bot.getProperty("ra9_1")
var ra10_1 = Bot.getProperty("ra10_1")
var manu = User.getProperty("manu")
var man = manu / 10
var man1 = man * 10
var man2 = man1 + 1
var betrand = Libs.Random.randomInt(1000000000, 9999999999);
var oddn = User.getProperty("oddn")

if (odd1 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m1+" vs "+m2+"\n_play_: _1_    _odd_: "+ra1_1+"\n","string")
User.setProperty("odd1_1",1,"integer")
User.setProperty("oddn",ra1_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd1_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra1 = oddn + ra1_1
User.setProperty("betslip",betslip+man2+". "+m1+" vs "+m2+"\n_play:_ _1_    _odd_:"+ra1_1+"\n")
User.setProperty("oddn",ra1,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd2 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m3+" vs "+m4+"\n_play_: _1_    _odd_: "+ra2_1+"\n","string")
User.setProperty("odd2_1",1,"integer")
User.setProperty("oddn",ra2_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd2_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra2 = oddn + ra2_1
User.setProperty("betslip",betslip+man2+". "+m3+" vs "+m4+"\n_play:_ _1_    _odd_: "+ra2_1+"\n")
User.setProperty("oddn",ra2,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd3 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m5+" vs "+m6+"\n_play_: _1_    _odd_: "+ra3_1+"\n","string")
User.setProperty("odd3_1",1,"integer")
User.setProperty("oddn",ra3_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd3_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra3 = oddn + ra3_1
User.setProperty("betslip",betslip+man2+". "+m5+" vs "+m6+"\n_play:_ _1_    _odd_: "+ra3_1+"\n")
User.setProperty("oddn",ra3,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd4 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m7+" vs "+m8+"\n_play_: _1_    _odd_: "+ra4_1+"\n","string")
User.setProperty("odd4_1",1,"integer")
User.setProperty("oddn",ra4_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd4_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra4 = oddn + ra4_1
User.setProperty("betslip",betslip+man2+". "+m7+" vs "+m8+"\n_play:_ _1_    _odd_: "+ra4_1+"\n")
User.setProperty("oddn",ra4,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd5 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m9+" vs "+m10+"\n_play_: _1_    _odd_: "+ra5_1+"\n","string")
User.setProperty("odd5_1",1,"integer")
User.setProperty("oddn",ra5_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd5_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra5 = oddn + ra5_1
User.setProperty("betslip",betslip+man2+". "+m9+" vs "+m10+"\n_play:_ _1_    _odd_: "+ra5_1+"\n")
User.setProperty("oddn",ra5,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd6 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m11+" vs "+m12+"\n_play_: _1_    _odd_: "+ra6_1+"\n","string")
User.setProperty("odd6_1",1,"integer")
User.setProperty("oddn",ra6_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd6_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra6 = oddn + ra6_1
User.setProperty("betslip",betslip+man2+". "+m11+" vs "+m12+"\n_play:_ _1_    _odd_: "+ra6_1+"\n")
User.setProperty("oddn",ra6,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd7 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m13+" vs "+m14+"\n_play_: _1_    _odd_: "+ra7_1+"\n","string")
User.setProperty("odd7_1",1,"integer")
User.setProperty("oddn",ra7_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd7_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra7 = oddn + ra7_1
User.setProperty("betslip",betslip+man2+". "+m13+" vs "+m14+"\n_play:_ _1_    _odd_: "+ra7_1+"\n")
User.setProperty("oddn",ra7,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd8 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m15+" vs "+m16+"\n_play_: _1_    _odd_: "+ra8_1+"\n","string")
User.setProperty("odd8_1",1,"integer")
User.setProperty("oddn",ra8_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd8_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra8 = oddn + ra8_1
User.setProperty("betslip",betslip+man2+". "+m15+" vs "+m16+"\n_play:_ _1_    _odd_: "+ra8_1+"\n")
User.setProperty("oddn",ra8,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd9 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron_-_"+betrand+"_\n______________________________\n\n1. "+m17+" vs "+m18+"\n_play_: _1_    _odd_: "+ra9_1+"\n","string")
User.setProperty("odd9_1",1,"integer")
User.setProperty("oddn",ra9_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd9_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra9 = oddn + ra9_1
User.setProperty("betslip",betslip+man2+". "+m17+" vs "+m18+"\n_play:_ _1_    _odd_: "+ra9_1+"\n")
User.setProperty("oddn",ra9,"integer")
User.setProperty("manu",man2,"integer")
}}
}else{
if (odd10 == "on"){
if (betslip == undefined){
User.setProperty("betslip","______________________________\n          🎫 _BETSLIP_\nbetslip_id: _Gamotron-"+betrand+"_\n______________________________\n\n1. "+m19+" vs "+m20+"\n_play:_ _1_    _odd_: "+ra10_1+"\n","string")
User.setProperty("odd10_1",1,"integer")
User.setProperty("oddn",ra10_1,"integer")
User.setProperty("manu",1,"integer")
User.setProperty("betslipid","_Gamotron_-_"+betrand,"string")
}else{
if (odd10_1 == 1){
Bot.sendMessage("❗ You cannot play the same bet on one game")
}else{
var ra10 = oddn + ra10_1
User.setProperty("betslip",betslip+man2+". "+m19+" vs "+m20+"\n_play:_ _1_    _odd_: "+ra10_1+"\n")
User.setProperty("oddn",ra10,"integer")
User.setProperty("manu",man2,"integer")
}}}}}}}}
}}}}
