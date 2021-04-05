//import fs from 'fs';
import db from '../../database/models/index';;
import fs from 'fs'
import AWS from 'aws-sdk'
import Constants from '../../utils/defaultConstants'

const s3 = new AWS.S3({
  accessKeyId: Constants.ID,
  secretAccessKey: Constants.SECRET
});
const getUpdate = async (body,files) => {
        if (files) {
          if (files.length >= 1) {
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
                ///console.log(`File uploaded successfully. ${data.Location}`);
              })
              // fs.createReadStream('../uploads/' + files[0].filename).pipe(fs.createWriteStream(dir + fileName));
              fs.unlink('../uploads/' + files[0].filename, function (err) {
                if (err) {
                  return console.log("Delete error: " + err);
                }
              });
              body.img = Constants.BUCKET + fileName
            } else {
              delete body.img;
            }
        }
console.log(body)
  return await db.b2bUserComercialCedi.update(body, {
    where : {
      id: body.id
    }
    }).then(data => {
         return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getUpdate
}