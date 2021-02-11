const mongoose = require('mongoose');

//Vi lager et nytt schema
const userSchema = new mongoose.Schema({
    date: Date,
    tag: String,
    name: String,
    townHallLevel: Number,
    townHallWeaponLevel: Number,
    expLevel: Number,
    trophies: Number,
    bestTrophies: Number,
    warStars: Number,
    attackWins: Number,
    defenseWins: Number,
    builderHallLevel: Number,
    versusTrophies: Number,
    bestVersusTrophies: Number,
    versusBattleWins: Number,
    role: String,
    donations: Number,
    donationsReceived: Number,
    league: Object,
    legendStatistics: Object,
    achievements: Array,
    troops: Array,
    heroes: Array,
    spells: Array,
});

module.exports = mongoose.model('user', userSchema); //ES6 Module

