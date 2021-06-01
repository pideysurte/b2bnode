import db from '../../database/models/index';
import jwt from 'jsonwebtoken';
import { secret } from '../../config/config'

const getLogin = async (idMarketplace, email, password) => {
  if (email && password && idMarketplace) {
    let market =  await db.b2bMarketPlace.findOne({
      where: {
        id: idMarketplace,
        ActMarketplaceAso: 1
      }
    }).then(data => { return data }).catch(e => {
      console.log(e);
    });
    if(market){
          return await db.b2bUserApp.findOne({
            where: {
              idMarketplace: idMarketplace,
              email: email,
              password: password
            },
            include: [{
              model: db.b2bMarketPlace,
              where: {
                ActMarketplaceAso: 1
              },
              as: 'b2bMarketPlace',
              attributes: ['versMarketplace','name']
            }]
          }).then(data => {
            if (data) {
              const token = jwt.sign(
                {
                  id: data.id,
                  email: email
                },
                secret,
                { expiresIn: '24h' }
              );
              return {
                success: true,
                message: 'Authentication successful!',
                token,
                data : {
                  id: data.id,
                  name: data.name,
                  email: data.email,
                  version: data.b2bMarketPlace.versMarketplace
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
    }else {
      return {
        success: false,
        message: 'Authentication failed! Market disabled'
      };
    }
    
  } else {
    return {
      success: false,
      message: 'Authentication failed! Please check the request'
    };
  }
}

module.exports = {
  getLogin
}