/*CMD
  command: 📌 Status
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BUTTON
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var refco = refList.length * 0.15
var tob = User.getProperty("tob")
var bon = tob * 0.05
var wit = User.getProperty("wit")
var bet = User.getProperty("bet")

if ((tob == 10000000) & (wit == 10000000) & (bet == 10000000)){
Bot.sendMessage("*💠 Your Status*\n------------------------------\n\n🔹 Total bonus = 0 Gamo\n🔹 Total Referrals = "+refList.length+"\n🔹 Referral Commission = "+refco+" Gamo\n🔹 Total Withdraw = 0 Gamo\n🔹 Total Bets = 0 Gamo")
}else{
if ((tob == 10000000) & (wit == 10000000) & (bet !== 10000000)){
Bot.sendMessage("*💠 Your Status*\n------------------------------\n\n🔹 Total bonus = 0 Gamo\n🔹Total Referral = "+refList.length+"\n🔹 Referral Commission = "+refco+" Gamo\n🔹 Total Withdraw = 0 Gamo\n🔹 Total Bets = "+bet+" Gamo")
}else{
if ((tob == 10000000) & (wit !== 10000000) & (bet == 10000000)){
Bot.sendMessage("*💠 Your Status*\n------------------------------\n\n🔹 Total bonus = 0 Gamo\n🔹Total Referral = "+refList.length+"\n🔹 Referral Commission = "+refco+" Gamo\n🔹 Total Withdraw = "+wit+" Gamo\n🔹 Total Bets = 0 Gamo")
}else{
if ((tob !== 10000000) & (wit == 10000000) & (bet == 10000000)){
Bot.sendMessage("*💠 Your Status*\n------------------------------\n\n🔹 Total bonus = "+bon+" Gamo\n🔹Total Referral = "+refList.length+"\n🔹 Referral Commission = "+refco+" Gamo\n🔹 Total Withdraw = 0 Gamo\n🔹 Total Bets = 0 Gamo")
}else{
if ((tob == 10000000) & (wit !== 10000000) & (bet !== 10000000)){
Bot.sendMessage("*💠 Your Status*\n------------------------------\n\n🔹 Total bonus = 0 Gamo\n🔹Total Referral = "+refList.length+"\n🔹 Referral Commission = "+refco+" Gamo\n🔹 Total Withdraw = "+wit+" Gamo\n🔹 Total Bets = "+bet+" Gamo")
}else{
if ((tob !== 10000000) & (wit !== 10000000) & (bet == 10000000)){
Bot.sendMessage("*💠 Your Status*\n------------------------------\n\n🔹 Total bonus = "+bon+" Gamo\n🔹Total Referral = "+refList.length+"\n🔹 Referral Commission = "+refco+" Gamo\n🔹 Total Withdraw = "+wit+" Gamo\n🔹 Total Bets = 0 Gamo")
}else{
if ((tob !== 10000000) & (wit == 10000000) & (bet !== 10000000)){
Bot.sendMessage("*💠 Your Status*\n------------------------------\n\n🔹 Total bonus = "+bon+" Gamo\n🔹Total Referral = "+refList.length+"\n🔹 Referral Commission = "+refco+" Gamo\n🔹 Total Withdraw = 0 Gamo\n🔹 Total Bets = "+bet+" Gamo")
}else{
Bot.sendMessage("*💠 Your Status*\n------------------------------\n\n🔹 Total bonus ="+bon+" Gamo\n🔹Total Referral = "+refList.length+"\n🔹 Referral Commission = "+refco+" Gamo\n🔹 Total Withdraw = "+wit+" Gamo\n🔹 Total Bets = "+bet+" Gamo")
}}}}}}}
