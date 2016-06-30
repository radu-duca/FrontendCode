/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('jobViewController', ['$scope', '$http', '$routeParams', '$location' , 'CommonResourcesFactoryBackup',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup) {

        $scope.back = function () {
            $location.url('/jobList');
        };

        $scope.job = {};
        $http({url: CommonResourcesFactoryBackup.findOneJobUrl + $routeParams.jobId, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.job = data;

            });

    }]);