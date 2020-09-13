const connection = require('./connection');

const orm = {
    selectAll: (cb) => {
        connection.query(`SELECT * FROM burgers`, function(error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    insertOne: (burger_name, cb) => {
        connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES (?, false)`, [burger_name], function(error, result) {
            if (error) throw error;
            cb(result);
        });
    },
    updateOne: (id, cb) => {
        connection.query(`UPDATE burgers SET burgers.devoured=true WHERE burgers.id=?`, [id], function(error, result) {
            if (error) throw error;
            cb(result);
        })
    },
    deleteOne: (id, cb) => {
        connection.query(`DELETE FROM burgers WHERE burgers.id=?`, [id], function(error, result) {
            if (error) throw error;
            cb(result);
        })
    }
}

module.exports = orm;