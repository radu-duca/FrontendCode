// TODO #2 load ngRoute module


// TODO #3 add default route for main page


// TODO #4 add #/numbers route and use redirectTo
// TODO #6 add route for mathematical operations
// TODO #9 add route for http request demo page

// TODO #HR1 add routes for Employees List page and Employee View page

var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when("/numbers", {
                redirectTo: '/math'
            }
        ).when("/math", {
            templateUrl: 'views/demo/math.html',
            controller: 'MathController'
        })
            .when("/", {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .when('/demoRequest', {
                templateUrl: 'views/demo/request.html',
                controller: 'RequestController'
            })
            .when('/employeeslist', {
                templateUrl: 'views/employeelist.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeview/:employeeid', {
                templateUrl: 'views/employeeview.html',
                controller: 'EmployeeViewController'
            })
            .when('/employeeslist', {
                templateUrl: 'views/employeelist.html',
                controller: 'EmployeeListController'
            })
            .when('/employeeview/:employeeid', {
                templateUrl: 'views/employeeview.html',
                controller: 'EmployeeViewController'
            })

            .otherwise({
                redirectTo: '/'
            });
    }]);



