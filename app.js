(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchMenu = '';
        $scope.message = 'Please enter data first';
        $scope.colors ={};
        $scope.colors.current = {color: "red"};
        $scope.bordercolors = {};
        $scope.bordercolors.current = {border_color: "red"};

        $scope.checkLunchMenu = function () {
            var result = $scope.lunchMenu.split(",").length;

            if (result > 1 && result <= 3) {
                $scope.message = 'Enjoy!';
                $scope.turnGreen();
            } else if (result > 3) {
                $scope.message = 'Too much!';
                $scope.turnRed();
            } else {
                $scope.message = 'Please enter data first';
                $scope.turnRed();
            }

        };

        $scope.turnGreen = function () {
            $scope.colors.current = {color: "green"};
            $scope.bordercolors.current = {border_color: "green"};
        }

        $scope.turnRed = function () {
            $scope.colors.current = {color: "red"};
            $scope.bordercolors.current = {border_color: "red"};
        }
    }
    
})();
