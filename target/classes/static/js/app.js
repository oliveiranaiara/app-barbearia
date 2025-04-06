
angular.module('superbarberApp', [])
.controller('AppointmentController', function($scope, $http) {
    $scope.appointments = [];
    $scope.newAppointment = {
        cliente: '',
        servico: '',
        barbeiro: '',
        dataHora: ''
    };
    
    $scope.loadAppointments = function() {
        $http.get('/api/agendamentos')
            .then(function(response) {
                $scope.appointments = response.data;
            })
            .catch(function(error) {
                console.error('Erro ao carregar agendamentos:', error);
            });
    };
    
    $scope.scheduleAppointment = function() {
        $http.post('/api/agendamentos', $scope.newAppointment)
            .then(function(response) {
                $scope.loadAppointments();
                $scope.newAppointment = {
                    cliente: '',
                    servico: '',
                    barbeiro: '',
                    dataHora: ''
                };
                alert('Agendamento realizado com sucesso!');
            })
            .catch(function(error) {
                console.error('Erro ao realizar agendamento:', error);
                alert('Erro ao realizar agendamento. Tente novamente.');
            });
    };
    
    // Initial load
    $scope.loadAppointments();
});
