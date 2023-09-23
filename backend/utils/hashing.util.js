const bcrypt = require('bcrypt');

module.exports = async function(pass){
   const hash = await bcrypt.hash(pass,10);
   if(hash) return hash;
   else return pass;
}