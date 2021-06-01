import db from '../../database/models/index';
import { msgcediuser } from '../../services/mails/mailmsgcedi';

const getMsgCedi = async (body) => {
    var msgcedi = await db.b2bMsgCedi.create(body).then(data => {
        return data;
    }).catch(e => {
        console.log(e);
    });
    //console.log(body)
    var usuario = await db.b2bUserApp.findOne({
        raw:true,
        where: {
            id: body.idUserapp
        }
    }).then(data => { return data }).catch(e => {
        console.log(e);
    });
    //console.log(usuario)
    let name = usuario.name
    let email = usuario.email
    let phone = usuario.phone
    
    
    //console.log(name)

    var market = await db.b2bMarketPlace.findOne({
        raw: true,
        where: {
            id: usuario.idMarketplace
        }
    }).then(data => { return data }).catch(e => {
        console.log(e);
    })
    
    let nameMarket = market.name
    msgcediuser(name, email, phone, nameMarket)


    return msgcedi
}

module.exports = {
    getMsgCedi
}