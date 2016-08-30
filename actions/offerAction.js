exports.action = {
    name: 'uploadOffers',
    description: 'upload the offers from exel',
    blockedConnectionTypes: [],
    outputExample: {},
    matchExtensionMimeType: false,
    version: 1.0,
    toDocument: true,
    middleware: [],

    inputs: {
        offers: {
            required: true
        },
        supermarket: {
            required: true
        },
        finicio: {
            requeried: true
        },
        ffin: {
            requeried: true
        }
    },

    run: function (api, data, next) {
      var error = null;
      var size = data.params.offers.length;
      for (i = 0; i < size; i++) {
          api.offerInit.createOffer(data.params.finicio, data.params.ffin, data.params.supermarket, data.params.offers[i], function (error) {
            if (error) {
              data.response = res + "\n" + "por favor revise su archivo de entrada o comuniquese con el administrador del sistema";
              next(error);
            } else if (i == size - 1) {
              data.response("carga de "+data.params.offer[i].descripcion+" efectuada exitosamente");
              next(data.response);
            }
            data.response = offer + "\n" + "por favor revise su archivo de entrada o comuniquese con el administrador del sistema";
            next(error);
          });
      }
      next(error);
    }
};
