var _ = require('lodash');
module.exports = {
    loadPriority: 1000,
    startPriority: 1000,
    stopPriority: 1000,
    initialize: function (api, next) {
        api.offerInit = {
            createOffer: function (finicio, ffin, supermarket, offer, next) {
              const cassandraD = require('cassandra-driver');
              const cliente = new cassandraD.Client({ contactPoints: ['127.0.0.1'], keyspace: 'chaplist'});

              const query = 'INSERT INTO Oferta_por_id(bucket, id_oferta, imagenes, fecha_inicio, fecha_final, '
                 + 'precio_normal, precio_oferta, upcs, nombre, descuento, categorias, sucursales, puntuacion)'
                 //+ ' VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)'
                 + 'VALUES(1,uuid(),{\''+offer.image+'\'}, \''+finicio+'\', \''
                 +ffin+'\', '+offer.normalPrice+', '+offer.offerPrice+', {\''+offer.upc
                 +'\'}, \''+offer.descripcion+'\', 0, {\'categoria\'}, {\'sucursales\'}, 0);';
              //const params = [1, uuid(), '{'+offer.image+'}', finicio, ffin, offer.normalPrice, offer.offerPrice, '{'+offer.upc+'}', offer.descripcion, 0, '{categoria}', '{sucursales}'];
              cliente.execute(query, function(err, result) {

              });
              next(true);
            },
            addProduct: function (offer, data, next) {
                api.models.product.findOrCreate({
                    where: {
                        upc: data.upc
                    },
                    defaults: {

                        upc: data.upc,
                        description: data.descripcion

                    }
                }).spread(function (product1) {
                    api.models.productstore.create({
                            productId: product1.id,
                            offerId: offer.id,
                            normalPrice: data.normalPrice,
                            offerPrice: data.offerPrice,
                            likes: 0,
                            image: data.image,
                            image1: '',
                            image2: ''
                        })
                        .then(function (offer) {
                            next(JSON.stringify(offer), false);
                        })
                        .catch(function (error) {
                            next(JSON.stringify(error), true);
                        });
                    next(JSON.stringify(product1), false);
                }).catch(function (error) {
                    next(JSON.stringify(error), true);
                });

            }
        };
        next();
    },
    start: function (api, next) {
        next();
    },
    stop: function (api, next) {
        next();
    }
};
