hrApp.controller('FormsController', ['$scope',
    function ($scope) {

        $scope.submit = function () {
            if ($scope.myForm.$valid) {
                alert("Form-ul trimis cu date valide");
            }

        };

    }]);