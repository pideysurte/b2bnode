import db from '../../database/models/index';
import {
  sha256
} from 'js-sha256';
import fs from 'fs'
import AWS from 'aws-sdk'
import Constants from '../../utils/defaultConstants'
const s3 = new AWS.S3({
  accessKeyId: Constants.ID,
  secretAccessKey: Constants.SECRET
});
const getCreate = async (body,files) => {
      if (files) {
        let fileName = Date.now() + files[0].originalname;
        var fileStream = fs.createReadStream('../uploads/' + files[0].filename);
        const params = {
          Bucket: Constants.BUCKET_NAME,
          Key: fileName,
          Body: fileStream,
          ACL: Constants.FILE_PERMISSION
        }
        s3.upload(params, function (err, data) {
          if (err) {
            throw err;
          }
        })
        fs.unlink('../uploads/' + files[0].filename, function (err) {
          if (err) {
            return console.log("Delete error: " + err);
          }
        });
        body.img = Constants.BUCKET + fileName
      }
  var incognita= body.name
      incognita= incognita.replace(/[^a-zA-Z0-9]/g, '')
      body.username = incognita
      body.password = sha256(body.password)
      return await db.b2bCedi.create(body).then(data => {
        return data;
      }).catch(e => {
        console.log(e);
      });
}

module.exports = {
  getCreate
}