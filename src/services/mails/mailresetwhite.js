import nodemailer from 'nodemailer';
import { serverMail } from '../../config/config'
const mailerResetWhite = async (pass, email, nameMarket, newPassword) => {
    var transporter = nodemailer.createTransport(serverMail);
    var contenido = '<p>Ha solicitado restaurar la contraseña de acceso, su nueva contraseña es:</p> ' + newPassword
        contenido += '<p>Por favor guárdala en un lugar seguro y no la comparta con nadie.</p>'
        contenido += "Cordialmente,"

    var mailOptions = {
        from: '"Pidelatienda " <pideysurte@innovfact.com>' + nameMarket,
        to: email,
        subject: 'Nueva contraseña para la App  ',
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
    mailerResetWhite
}