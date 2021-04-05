import db from '../../database/models/index';

const getLogin = async (email, password) => {
  console.log(email)
  console.log(password)
  return await db.b2bUserAdmin.findOne({
      where: {
        email: email,
        password: password
      }
  }).then(data => {
    return data
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getLogin
}
