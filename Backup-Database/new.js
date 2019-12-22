const {connect} = require('mongoose'), schema = require("./Schema");

(async () => {
    connect(`Your new database url!`, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // Change "data.json" to "db.js"  and add `module.exports = ` infront of the first `[`
    schema.insertMany(require("./db.js"), (err, doc) => console.log(`Database backed up to the new URL`));
})()
