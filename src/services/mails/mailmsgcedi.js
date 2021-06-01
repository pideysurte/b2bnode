import nodemailer from 'nodemailer';
import { serverMail } from '../../config/config'

const msgcediuser = async (name, email, phone, nameMarket) => {
    var transporter = nodemailer.createTransport(serverMail);
    var contenido = '<p>El Señor ' + name + 'con celular ' + phone + ' y email ' + email + ', ha solicitado ser codificado como establecimiento cliente de su empresa. Por favor contactarlo para establecer las condiciones de servicio:</p> '

    contenido += "Cordialmente,"

    var mailOptions = {
        from: '"Pidelatienda " <pideysurte@innovfact.com>',
        to: email,
        subject: 'Solicitud de codificación de Establecimiento desde App   ' + nameMarket,
        text: 'Reciba un cordial saludo ',
        html: contenido
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        // console.log('Message sent: ' + info.response);
    })
}
module.exports = {
    msgcediuser
}