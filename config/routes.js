exports.default = {
  routes: function(api){
    return {

      /* ---------------------
      routes.js

      For web clients (http and https) you can define an optional RESTful mapping to help route requests to actions.
      If the client doesn't specify and action in a param, and the base route isn't a named action, the action will attempt to be discerned from this routes.js file.

      Learn more here: http://www.actionherojs.com/docs/#routes

      examples:

      get: [
        { path: '/users', action: 'usersList' }, // (GET) /api/users
        { path: '/search/:term/limit/:limit/offset/:offset', action: 'search' }, // (GET) /api/search/car/limit/10/offset/100
      ],

      post: [
        { path: '/login/:userID(^\\d{3}$)', action: 'login' } // (POST) /api/login/123
      ],

      all: [
        { path: '/user/:userID', action: 'user', matchTrailingPathParts: true } // (*) /api/user/123, api/user/123/stuff
      ]

      ---------------------- */
      get: [
        { path: '/Apps/:token', action: 'getApps' },
        { path: '/Chap/Supermarkets/:pais', action: 'getSupermarkets' }, //Q4 quemar
        { path: '/Chap/Stores/', action: 'getStores' }, //Q2
        { path: '/Chap/Offer/:supermarketId/:offset/', action: 'getOffers' }, //Q5
        //{ path: '/Chap/Offer/addLike/:offerId/:productId', action: 'addLikes' },
        { path: '/Chap/Offer/topfavs', action: 'topOffers' }, //Q1
        { path: '/Chap/getAllOffers/:value/:offset/', action: 'getAllOffers'},
        { path: '/Chap/getComentarios/:offerId', action: 'getComments'}, //Q7 no existe
        { path: '/Chap/getPerfil/:userId', action: 'getUserInfo'}, //Q3, no existe action,
        { path: '/Chap/getOffer/:offerId', action: 'getOfferDetail'}, //Q6, no existe action
        { path: '/Chap/compare/:upc', action: 'getOffersByProduct'}, //Q8, no existe
        { path: '/Chap/favorites/:userId', action: 'getFavorites'}, //Q9-10 no existe
        { path: '/Chap/categories/', action: 'getCategories'}, //Q11.1 (insertar quemado)
        { path: '/Chap/offersCategory/:category', action: 'getOffersByCategory'}, //Q12
        { path: '/Chap/offersPrice/:min/:max', action: 'getOffersByPrice'}, //Q11
        { path: '/Chap/offersDiscount/:min/:max', action: 'getOffersByDiscount'}, //Q13
        { path: '/Admin/visitas/usuario/:offerId', action: 'getVisitasUsuario'}, //Q15,
        { path: '/Admin/visitas/pais/:offerId', action: 'getVisitasPais'}, //Q16,

      ],
      post: [
        { path: '/auth/google', action: 'authGoogle' },
        { path: '/App/:token', action: 'createApp' },
        { path: '/Chap/tokenPetition', action: 'tokenPetition' },
        { path: '/uploadStore', action: 'uploadStores' }, //Q2
        { path: '/uploadOffer/supermarket/:supermarket/inicio/:finicio/fin/:ffin',action:'uploadOffers'}, //Q1, Q5, Q6, Q11, Q12, Q13 Q8(no es vista), Q10(no es vista)
        //{ path: '/Chap/Offer/likes/:token', action: 'addOrRemoveLikes' },
        //{ path: '/Chap/Offer/favproducts/:token', action: 'getFavInOffer' },
        { path: '/Chap/User/', action: 'upsertUser'}, //Q3, no hay action
        { path: '/Chap/Favorite/:userId', action: 'addFavorite'}, //Q9
        { path: '/Chap/Visita/:offerId', action: 'addVisita'}, //Q15, 16

      ],
      put: [
        { path: '/App/:_id/:token', action: 'updateApp' },
        { path: '/Chap/Comment/:offerId/User/:userId', action: 'createComment'},//Q7 no existe
      ],
      delete: [
        { path: '/App/:_id/:token', action: 'deleteApp' }
      ]
    }
  }
}
