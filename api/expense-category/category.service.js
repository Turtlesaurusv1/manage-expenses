const { Pool } = require("pg");

async function create(body){
    console.log(body);

    // const result = await Pool.query(
    //   `INSERT INTO programming_languages 
    //   (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    //   VALUES 
    //   (?, ?, ?, ?, ?)`, 
    //   [
    //     programmingLanguage.name, programmingLanguage.released_year,
    //     programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
    //     programmingLanguage.tiobe_rank
    //   ]
    // );
  
    // let message = 'Error in creating programming language';
  
    // if (result.affectedRows) {
    //   message = 'Programming language created successfully';
    // }
  
    return {body};
  }

  module.exports = {
    create,
  }
  