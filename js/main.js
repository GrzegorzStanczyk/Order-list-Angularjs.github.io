var app = angular.module('exampleApp', []);

app.controller('ExampleController', ['$scope', function($scope){



    $scope.products = [
        { text: 'Milk',   bought: false },
        { text: 'Bread',  bought: true },
        { text: 'Butter', bought: true },
        { text: 'Eggs',   bought: false },
        { text: 'Tea',    bought: false }
    ];

    $scope.clearCategories = function() {
        $scope.products =[];
    };

    $scope.clearBought = function() {
        $scope.products = $scope.products.filter(function(products) {
            return products.bought !== true;
        });
    };

    $scope.addCategories = function() {
        $scope.products =[
            { text: 'Milk',   bought: false },
            { text: 'Bread',  bought: true },
            { text: 'Butter', bought: true },
            { text: 'Eggs',   bought: false },
            { text: 'Tea',    bought: false }
        ];
    };

    $scope.clearProduct = function($event) {
        $event.currentTarget.parentNode.remove();
    };

    $scope.editProduct = function($event) {
        $event.currentTarget.parentNode.remove();
    };

    $scope.addProduct = function() {
        var product = $scope.product;
        $scope.product = {}; // Clean up the form fields
        $scope.products.push(product);
        console.log($scope.products);
    };

    $scope.toggle = function($event, $index) {
        console.log($scope.products[$index].bought);
        // $scope.products.bought = true;
        // $event.bought = !$event.bought;
        $scope.products[$index].bought = !$scope.products[$index].bought;
    };

}]);
