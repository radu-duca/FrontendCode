hrApp.controller('MenuController', ['$scope', function ($scope) {
    $scope.demoActionlist = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label: "Demo actions",
            url: "views/demomath.html"
        }
    ];
}

]);