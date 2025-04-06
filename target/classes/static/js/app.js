angular.module('superbarberApp', [])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .constant('API_URL', '/api') // Placeholder API URL - Replace with actual URL
    .controller('AppointmentController', function($scope, $http, API_URL) {
        $scope.appointments = [];
        $scope.newAppointment = {};

        function loadAppointments() {
            $http.get(API_URL + '/agendamentos')
                .then(function(response) {
                    $scope.appointments = response.data;
                });
        }

        $scope.scheduleAppointment = function() {
            $http.post(API_URL + '/agendamentos', $scope.newAppointment)
                .then(function(response) {
                    $scope.newAppointment = {};
                    loadAppointments();
                });
        };

        loadAppointments();
    });