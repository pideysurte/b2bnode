import db from '../../database/models/index';
import {
  sha256
} from 'js-sha256';

const getCreate = async (body) => {
  return await db.b2bUserAdmin.create(body).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getCreate
}