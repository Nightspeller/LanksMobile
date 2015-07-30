angular.module('starter.controllers', [])
    .controller('ServicesCtrl', function($scope, Departments) {})
    .controller('DepartmentsCtrl', function($scope, Departments) {
            $scope.departments = Departments.all();

        console.log($scope.departments)
        })
    .controller('DepartmentCtrl', function($scope, $stateParams, Departments) {
        $scope.department = Departments.get($stateParams.department)[0];

        console.log($scope.department)
    })
    .controller('TrackingCtrl', function($scope, Tracking) {
        $scope.getStatus = function (invoice) {
            Tracking.getByInvoice(invoice).then(function (data) {
                if (data.length !== 0) {
                    $scope.trackingData = data[0];
                } else {
                    $scope.trackingData = 'none';
                }

            });
        }
    })
    .controller('ContactsCtrl', function($scope) {});

