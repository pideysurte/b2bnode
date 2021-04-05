import nodemailer from 'nodemailer';
import { serverMail } from '../../config/config'
const wellcomeuserasoc = async (name, email) => {
    var transporter = nodemailer.createTransport(serverMail);
    var contenido = "<p>Nos complace mucho que haya descargado nuestra App y se haya inscrito, en ella podrá encontrar todas las unidades de negocio de nuestros afiliados (Fabricantes, Mayoristas y Distribuidores del sector de consumo masivo) que le pueden atender en su establecimiento, solo tiene que solicitar la atención (codificación) del proveedor de su interés, y ellos estaran poniéndose en contacto para establecer las mejores condiciones de servicio. Una vez este registrado con todos los datos de su negocio, la App le permitirá conocer todo su portafolio de productos y hacerle los pedidos que requiera para su negocio, desde cualquier lugar y momento. </p>";
        contenido += "<p>Esto lo hacemos con el fin de dotarle de herramientas que le permitan:</p>";
        contenido += "<ul><li>Manejar mejor el tiempo que invierte para colocar sus pedidos.</li><li>Tenernos siempre a la mano, para que su negocio no tenga agotados.</li><li>No quitarte tiempo en la atención de sus clientes.</li><li>Mantenerle informado de nuevos productos y promociones.</li><li>Ayudarle a ir modernizando las operaciones de su negocio.</li></ul>";
        contenido += "<p><strong>Todo lo anterior solo significa mas ingresos para su negocio por un mejor manejo del tiempo y el suministro.</strong></p>"
        contenido += "<p>Es importante que emplee la misma cuenta de correo que haya empleado en otra App de alguno de nuestros afiliados, ya que eso les permitirá poderlo atender sin una nueva codificación de su establecimiento.";
        contenido += "<p>El comercial, le ayudara a conocer la App y hacer el mejor uso de ella, guardaremos los productos que típicamente nos compra en un concepto que hemos llamado “Mi Lista” por cada proveedor para que la próxima vez que su surtido requiera renovación, ya no tenga que ir a buscar los productos, solo coloca la cantidad y poner el pedido. Estamos para seguir ayudándole y mejorando, cuéntenos como le parece este nuevo servicio.";
        contenido += "<p><strong>SERVICIO ES SIN NINGUN COSTO PARA SU NEGOCIO</strong></p>";
        contenido += "<p>Cordialmente,</p>";

    var mailOptions = {
        from: '"Pidelatienda " <pideysurte@innovfact.com>',
        to: email,
        subject: 'Bienvenido(a) a la App ' + name,
        text: 'Reciba un cordial saludo ',
        html: contenido
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
    })
}
module.exports = {
    wellcomeuserasoc
}