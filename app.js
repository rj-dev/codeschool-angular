(function () {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        store.products = [];
        store._Index = 0;

        $http.get('store-products.json').success(function (data) {
            store.products = data;
        });

        // show a certain image
        store.showPhoto = function (index) {
            store.products.images[index];
        };


    } ]);

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);

            this.review = {};
        };
    });
})();