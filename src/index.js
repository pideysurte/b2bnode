import express, {
  json
} from 'express';
import morgan from 'morgan'; 
import cors from 'cors'; 

const app = require('express')();

var server = require('http').createServer(app);



app.use(morgan('dev'));
//app.use(json());
app.use(cors());
app.use(express.static('public'));
app.use(express.json({
  limit: '50mb'
}));
/*
app.use(express.urlencoded({
  limit: '50mb'
}));
*/
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

import avertisingCediRoutes from './routes/b2bAdvertisingCedi.routes';
import advertisingMarketRoutes from './routes/b2bAdvertisingMarket.routes';
import categoryRoutes from './routes/b2bCategory.routes';
import cediRoutes from './routes/b2bcedi.routes';
import detailListPricesCustomRoutes from './routes/b2bDetailListPricesCustom.routes';
import establecimientosClientCediRoutes from './routes/b2bEstablecimientosClientCedi.routes';
import fabDistRoutes from './routes/b2bFabDist.routes';
import listPricesCustomRoutes from './routes/b2bListPricesCustom.routes';
import marketPlaceRoutes from './routes/b2bMarketPlace.routes';
import mylistRoutesRoutes from './routes/b2bMyList.routes';
import paymentMethodsRoutes from './routes/b2bPaymentMethods.routes';
import personsAsoAllRoutes from './routes/b2bPersonsAsoAll.routes';
import productsRoutes from './routes/b2bProductsCedi.routes';
import subcategoryRoutes from './routes/b2bSubcategory.routes';
import typeDocumentRoutes from './routes/b2bTypeDocument.routes';
import typeMarketplaceRoutes from './routes/b2bTypeMarketplace.routes';
import typeShippingRoutes from './routes/b2bTypeShipping.routes';
import statusRoutes from './routes/b2bStatus.routes';
import typeTaxesRoutes from './routes/b2bTypeTaxes.routes';
import userAppRoutes from './routes/b2bUserApp.routes';
import userAdminRoutes from './routes/b2bUserAdmin.routes';
import cartRoutes from './routes/b2bcart.routes';
import wishlistRoutes from './routes/b2bwishlist.routes';
import ordersRoutes from './routes/b2bOrders.routes';
import routesCediRoutes from './routes/b2bRoutesCedi.routes';
import userComercialCedi from './routes/b2bUserComercialCedi.routes'
import notificationsRoutes from './routes/b2bNotifications.routes'

app.use('/api/advertisingcedi', avertisingCediRoutes);
app.use('/api/advertisingmarket', advertisingMarketRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/cedi', cediRoutes);
app.use('/api/establishmentsclientcedi', establecimientosClientCediRoutes);
app.use('/api/detaillistpricescustom', detailListPricesCustomRoutes);
app.use('/api/fabdist', fabDistRoutes);
app.use('/api/listpricescustom', listPricesCustomRoutes);
app.use('/api/paymentmethods', paymentMethodsRoutes);
app.use('/api/personsasoall', personsAsoAllRoutes);
app.use('/api/productscedi', productsRoutes);
app.use('/api/subcategory', subcategoryRoutes);
app.use('/api/status', statusRoutes);
app.use('/api/typemarketplace', typeMarketplaceRoutes);
app.use('/api/mylistroutes', mylistRoutesRoutes);
app.use('/api/marketplace', marketPlaceRoutes);
app.use('/api/typeshipping', typeShippingRoutes);
app.use('/api/typetaxes', typeTaxesRoutes);
app.use('/api/typedocument', typeDocumentRoutes);
app.use('/api/userapp', userAppRoutes);
app.use('/api/useradmin', userAdminRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/routescedi', routesCediRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/comercialcedi', userComercialCedi);
app.use('/api/notifications', notificationsRoutes);

server.listen(3000, function () {
  console.log('listening on *:3000');
});
