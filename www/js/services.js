angular.module('starter.services', [])
    .factory('Departments', function($http) {

        var departments = {data: []};
        $http.get('http://xn--80aubjv.xn--p1ai/departments/json').then(function (data) {
            departments.data = data.data;
            departments.data.sort(function(a,b){
                if (a.city > b.city) {
                    return 1
                } else {
                    return -1
                }
            });
        });
        return {
            all: function() {
                console.log(departments)
                return departments;
            },
            remove: function(chat) {

            },
            get: function(departmentName) {
                return departments.data.filter(function( obj ) {
                    return obj.cityEng == departmentName;
                });
            }
        };
    })
    .factory('Tracking', function($http, $q) {
        return {
            getByInvoice: function(invoice) {
                return $q(function(resolve, reject) {
                    $http.get('http://xn--80aubjv.xn--p1ai/online/oriflame?invoice='+invoice).then(function (data) {
                        resolve(data.data);
                    });
                });
            }
        };
    });
