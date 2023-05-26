const { Pool } = require("pg");

async function create(body){
    console.log(body);
  
    return {body};
  }

  module.exports = {
    create,
  }
  