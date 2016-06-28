hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){
    
    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        var numbera = parseInt($scope.a);
        var numberb = parseInt($scope.b);
//         $scope.op1 = numbera + numberb;
//         $scope.op2 = numbera - numberb;
//         $scope.op3 = numbera * numberb;
//         $scope.op4 = numbera / numberb;
//        TODO #13 refactor your calculations using MathService

        $scope.op1 = MathService.add(numbera, numberb);
        $scope.op2 = MathService.substract(numbera, numberb);
        $scope.op3 = MathService.multiply(numbera, numberb);
        $scope.op4 = MathService.devide(numbera, numberb);
    }

}]);
