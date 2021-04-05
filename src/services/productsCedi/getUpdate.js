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
    let j = 1

    
    if (files) {
      if (files.length >= 1) {
        for (var i = 0; i < files.length; i++) {
          let image = files[i].fieldname
          let fileName = Date.now() + files[i].originalname;
          var fileStream = fs.createReadStream('../uploads/' + files[i].filename);
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
          fs.unlink('../uploads/' + files[i].filename, function (err) {
            if (err) {
              return console.log("Delete error: " + err);
            }
          })
          body[image] = Constants.BUCKET + fileName
          j++
        }
      }
    }


  if (!body.umd) {
    body.umd = 0;
  }
  if (!body.orderMinUmd) {
    body.orderMinUmd = 0;
  }
  if (!body.priceTax) {
    body.priceTax = 0;
  }
  if (!body.priceTax) {
    body.priceTax = 0;
  }
  if (!body.orderMinTax) {
    body.orderMinTax = 0;
  }
  if (!body.priceUmdTax) {
    body.priceUmdTax = 0;
  }

  return await db.b2bProductsCedi.update(body, {
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