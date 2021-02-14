const Clash = require('../api/clash.js');
const clash = new Clash(process.env.CLASH_TOKEN);
const querystring = require("querystring");

var methods = {
    requestClanInfo: async function () {
        return await clash.getData(`/clans/${process.env.CLASH_CLAN_TAG_ENCODED}`);
    },
    requestPlayersInfo: async function() {
        const getClanInfo = await this.requestClanInfo();
        let array = [];
        for(const member of getClanInfo.memberList) {
            var tagString = member.tag;
            tagString = tagString.slice(1)
            const memberInfo = await clash.getData(`/players/%23${tagString}`);
            array.push(memberInfo);
        }
        return array;
    }
};

exports.data = methods;