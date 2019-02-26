define(["backbone", "models/home"], function(Backbone, home) {

  var myCollection = Backbone.Collection.extend({

        model : Menu,
    });

  return myCollection;
});
