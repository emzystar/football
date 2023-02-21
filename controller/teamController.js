const Teams = require('../model/team')

const getAllTeams = async (req, res) => {
    const { name, location, uclwinner, sort, select } = req.query
    let queryObject = {};
    let result = Teams.find(queryObject)
    if (name) {
        queryObject.name = {$regex: name, $options: "i"}
        // regex allows us to search based on some strings
        // i in option is to cater for caes (i - case insesitivity)
    }
    if(location) {
        queryObject.location = {$regex: location, $options: "i"}
    }
    if(uclwinner) {
        queryObject.uclwinner = uclwinner === "true" ? true  : false;
    }
    // sorting ________________________________________________________________
    if(sort){
        const sortList = sort.split(",").join(" ")
        result = result.sort(sortList);

    }


    // selecting _________________________________
    if(select){
        const selectList = select.split(",").join(" ")
        result = result.select(selectList)
    }

    // limit ________________________________________________________________
    const limit = Number(req.query.limit)
    result = result.limit(limit)


    result = result.find(queryObject)
    const teams = await result;
    res.status(200).json({ noOfTeams: teams.length, teams })
};

module.exports = getAllTeams;