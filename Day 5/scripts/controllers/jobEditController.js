/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('jobEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
     

        $http({url: CommonResourcesFactoryBackup.findOneJobUrl + $routeParams.jobId, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.job = data;
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.job = {};
        };

        /**
         * Persist an jobEdit
         * @param jobEdit - jobEdit to be persisted
         */
        $scope.create = function (jobEdit) {
            $http({url: CommonResourcesFactoryBackup.editJobUrl, method: 'PUT', data: jobEdit})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);