
angular.module('superbarberApp', [])
    .controller('AppointmentController', function($scope, $http) {
        $scope.appointments = [];
        $scope.newAppointment = {};

        function loadAppointments() {
            $http.get('/api/agendamentos')
                .then(function(response) {
                    $scope.appointments = response.data;
                });
        }

        $scope.scheduleAppointment = function() {
            $http.post('/api/agendamentos', $scope.newAppointment)
                .then(function(response) {
                    $scope.newAppointment = {};
                    loadAppointments();
                });
        };

        loadAppointments();
    });
