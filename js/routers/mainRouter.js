// Router
define(['backbone',
        'views/firstView',
        'views/aboutView',
        'views/contactView',
        'views/servicesView',
    ],

function(Backbone,
         FirstView,
         AboutView,
         ContactView,
         ServicesView) {

    var MainRouter = Backbone.Router.extend({

        routes : {
          '' : 'first',
          'about'       : 'showAbout',
          'contact'     : 'showContact',
          'services'    : 'showServices'
        },

        first: function() {
            var firstView = new FirstView();
        },

        showAbout: function(){
          var aboutView = new AboutView();
        },
        showContact: function(){
          var contactView = new ContactView();
        },
        
        showServices: function(){
          var servicesView = new ServicesView();
        }

    });

    return MainRouter;
});
