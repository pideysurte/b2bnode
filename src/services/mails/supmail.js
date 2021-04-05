import db from '../../database/models/index';
import nodemailer from 'nodemailer';
import { serverMail } from '../../config/config'

const supmail = async (body) => {    
    var usuarios = await db.b2bUserApp.findOne({
        raw:true,
        where: {
            id: body.idUserapp
        }
    }).then(data => { return data }).catch(e => {
        console.log(e);
    });
    var email = usuarios.email
    var transporter = nodemailer.createTransport(serverMail);
    var contenido = '<p>El Señor ' + usuarios.name + ' con celular ' + usuarios.phone + ' y email ' + email + ', requiere de tu ayuda técnica, por favor contactarlo. Mensaje: '+ body.data +'</p> '
    
    contenido += "Cordialmente,"

    var mailOptions = {
      from: '"Pidelatienda " <pideysurte@innovfact.com>',
      to: "pideysurte@innovfact.com",
      subject: "Solicitud de soporte en la App  ",
      text: "Recibe un cordial saludo ",
      html: contenido,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
    })
}
module.exports = {
    supmail
}