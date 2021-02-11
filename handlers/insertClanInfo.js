const Clan = require("../database/clanSchema.js");
const clashHandler = require("./clashHandler.js");

async function getAndInsertData() {
  const apiClanInfo = await clashHandler.data.requestClanInfo();
  const dbFormat = {
    date: new Date(),
    name: apiClanInfo.name,
    type: apiClanInfo.type,
    description: apiClanInfo.description,
    clanLevel: apiClanInfo.clanLevel,
    clanPoints: apiClanInfo.clanPoints,
    clanVersusPoints: apiClanInfo.clanVersusPoints,
    warWinStreak: apiClanInfo.warWinStreak,
    warWins: apiClanInfo.warWins,
    warLeague: apiClanInfo.warLeague,
    members: apiClanInfo.members,
    memberList: apiClanInfo.memberList,
  };
  const clan = new Clan(dbFormat);
  clan.save();
}

module.exports = getAndInsertData;
