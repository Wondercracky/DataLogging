const mongoose = require("mongoose");

//Vi lager et nytt schema
const clanSchema = new mongoose.Schema({
  date: Date,
  name: String,
  type: String,
  description: String,
  clanLevel: Number,
  clanPoints: Number,
  clanVersusPoints: Number,
  warWinStreak: Number,
  warWins: Number,
  warLeague: Object,
  members: Number,
  memberList: Array,
});

module.exports = mongoose.model("clan", clanSchema); //ES6 Module
