const fetch = require('node-fetch');

var Clash = function Clash(token) {
    if (!(this instanceof Clash))
        return new Clash(token);

    this.token = token;

    if (!this.token)
        throw new Error('Please check the arguments!');
};

Clash.prototype.getData = function getData(command) {
    return new Promise((resolve, reject) => {
        var url = `https://api.clashofclans.com/v1${command}`;
        fetch(url, { headers: {'Authorization': `Bearer ${this.token}` }
        }).then(res => {
            if (res.ok) {
                resolve(res.json());
            } else {
                reject('Network response was not ok');
            }
        })
    });
}

module.exports = Clash;