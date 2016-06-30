/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('jobListController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup', '$route',
    function ($scope, $http, $location, CommonResourcesFactoryBackup, $route) {

        $scope.jobList = [];

        /*
         $scope.jobList = [
         {
         "id": 100,
         "firstName": "Steven",
         "lastName": "King",
         "email": "SKING",
         "phoneNumber": "515.123.4567",
         "hireDate": "1987-06-17",
         "jobId": 1,
         "salary": 24000.00,
         "commissionPct": null,
         "managerId": null,
         "departmentId": 90
         },
         {
         "id": 101,
         "firstName": "Neena",
         "lastName": "Kochhar",
         "email": "NKOCHHAR",
         "phoneNumber": "515.123.4568",
         "hireDate": "1989-09-21",
         "jobId": 2,
         "salary": 17000.00,
         "commissionPct": null,
         "managerId": 100,
         "departmentId": 90
         },
         {
         "id": 102,
         "firstName": "Lex",
         "lastName": "De Haan",
         "email": "LDEHAAN",
         "phoneNumber": "515.123.4569",
         "hireDate": "1993-01-13",
         "jobId": 2,
         "salary": 17000.00,
         "commissionPct": null,
         "managerId": 100,
         "departmentId": 90
         }
         ];
         */

        $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobList = data;
            });

        $scope.viewjobList = function (jobListId) {
            $location.url('/jobView/' + jobListId);
        };

        $scope.editjobList = function(jobListId) {
            $location.url('/jobtEdit/' + jobListId);
        };



        $scope.deletejobList = function(jobListId) {

            $http({url: CommonResourcesFactoryBackup.findOneJobUrl + "/" + jobListId, method: 'DELETE'})
                .success(function (data, status, headers, config) {
                    //$scope.jobList = data;
                    $route.reload()});
        };
    }]);