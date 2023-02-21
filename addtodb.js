require('dotenv').config()
const Teams = require('./model/team')
const jsonTeam = require('./team.json')
const mongoose = require("mongoose")





const startServer = async ()=> {
    try{
        await mongoose.connect(process.env.MONGOTEE);
        await Teams.deleteMany() 
        // it deletes the data base and adds everything afresh
       await Teams.create(jsonTeam);
       process.exit(0);

    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
startServer()