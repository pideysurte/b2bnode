import db from '../../database/models/index';
//import jwt from 'jsonwebtoken';
//import { secret } from '../../config/config'

const login = async (email, password) => {
  if (email && password) {
    return await db.b2bUserApp.findOne({
      where: {
        email: email,
        password: password
      },
      include: [{
        model: db.authUserTypes,
        as: 'auth_user_types'
      }]
    }).then(data => {
      if (data) {
        const token = jwt.sign({
            id: data.id,
            email: email
          },
          secret, {
            expiresIn: '24h'
          }
        );

        return {
          success: true,
          message: 'Authentication successful!',
          token,
          data: {
            id: data.auth_user_types.id,
            name: data.auth_user_types.name
          }
        }
      } else {
        return {
          success: false,
          message: 'Incorrect username or password'
        }
      }
    }).catch(e => {
      console.log(e);
    });
  } else {
    return {
      success: false,
      message: 'Authentication failed! Please check the request'
    };
  }
}

module.exports = {
  login
}