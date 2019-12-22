# Mongoose Database backup system...


**1.** Go to `Schema.js` and add your database name and data schema.. 

**2.** Go to `new.js` and add your new database url..

**3.** Go to `old.js` and add your old database url.. 

**__Steps__**

**1.** Run `node old.js` so it adds all of the data to the `data.json` file.. then rename the `data.json` file to `db.js` and add `module.exports = ` to the front of the code.. 

**2.** Run `node new.js` so it adds all of the data from `db.js` to the new database.. 

**Boom.** You are done.. and all of the database entries should be in the new database collection.. 
