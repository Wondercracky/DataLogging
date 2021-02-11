const User = require("../database/userSchema.js");
const clashHandler = require("./clashHandler.js");

async function getAndInsertData() {
  const apiUserInfo = await clashHandler.data.requestPlayersInfo();
  for(const userInfo of apiUserInfo) {
    const dbFormat = {
        date: new Date(),
        tag: userInfo.tag,
        name: userInfo.name,
        townHallLevel: userInfo.townHallLevel,
        townHallWeaponLevel: userInfo.townHallWeaponLevel,
        expLevel: userInfo.expLevel,
        trophies: userInfo.trophies,
        bestTrophies: userInfo.bestTrophies,
        warStars: userInfo.warStars,
        attackWins: userInfo.attackWins,
        defenseWins: userInfo.defenseWins,
        builderHallLevel: userInfo.builderHallLevel,
        versusTrophies: userInfo.versusTrophies,
        bestVersusTrophies: userInfo.bestVersusTrophies,
        versusBattleWins: userInfo.versusBattleWins,
        role: userInfo.role,
        donations: userInfo.donations,
        donationsReceived: userInfo.donationsReceived,
        league: userInfo.league,
        legendStatistics: userInfo.legendStatistics,
        achievements: userInfo.achievements,
        troops: userInfo.troops,
        heroes: userInfo.heroes,
        spells: userInfo.spells,
      };
    const user = new User(dbFormat);
    user.save();
  }
}

module.exports = getAndInsertData;
