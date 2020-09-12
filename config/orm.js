const connection = require('./connection');

const selectAll = (res) => {
    connection.query(`SELECT * FROM burgers`, function(error, result) {
        if (error) throw error;
        const createdBurgers = result.filter(burger => burger.devoured === 0);
        const devouredBurgers = result.filter(burger => burger.devoured === 1);
        res.render("index", {
            created: createdBurgers,
            devoured: devouredBurgers
        });
    })
}

const insertOne = () => {
    
}

const updateOne = () => {
    
}

const deleteOne = () => {
    
}

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
module.exports.updateOne = updateOne;
module.exports.deleteOne = deleteOne;