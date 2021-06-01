import db from '../../database/models/index';
import jwt from 'jsonwebtoken';
import { secret } from '../../config/config'
const getLogin = async (email, password) => {
  return await db.b2bUserAdmin.findOne({
      where: {
        email: email,
        password: password
      }
  }).then(data => {
    const token = jwt.sign(
      {
        id: data.id,
        email: email
      },
      secret,
      { expiresIn: '24h' }
    )
    data.dataValues["token"]=token
    return data
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getLogin
}
