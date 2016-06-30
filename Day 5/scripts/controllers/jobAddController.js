/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('jobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function($scope, $http, $location, CommonResourcesFactoryBackup) {
        $scope.job = {};
        
        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };

        /**
         * Persist an Addjob
         * @param Addjob - jobAdd to be persisted
         */
        $scope.create = function (jobAdd) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'POST', data: jobAdd})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

    }]);