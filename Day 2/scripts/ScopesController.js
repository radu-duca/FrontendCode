hrApp.controller('ScopesController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.someValue = "someValue";
    console.log($scope.someValue);

$scope.title = 'Two Way Binding Demo';
$scope.childtemplate = 'templates/childscope.html';
$scope.resetFirstVariable = function() {
    $scope.firstVariable = undefined;
};
$scope.setFirstVariable = function(val) {
    $scope.firstVariable = val;
}
}]);
