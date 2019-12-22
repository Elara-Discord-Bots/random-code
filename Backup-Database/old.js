const {connect} = require('mongoose'), fs = require('fs'), schema = require("./Schema");
(async () => {
    connect(`Your OLD DB LINK`, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    let data = await schema.find();

    // Read 'new.js' to know how this works..
    fs.writeFile("./data.json", require("util").inspect(data, {depth: 10}), (err) => {
            if (err) console.error(err)
    });
})()
