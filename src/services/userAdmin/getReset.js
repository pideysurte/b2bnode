//import fs from 'fs';
import db from '../../database/models/index';;

const getReset = async (email, password) => {
  return await db.b2bUserAdmin.update({
    password
  }, {
    where: {
      email
    }
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getReset
}