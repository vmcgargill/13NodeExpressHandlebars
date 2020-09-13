const orm = require('../config/orm');

const burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        })
    }
}

module.exports = burger;