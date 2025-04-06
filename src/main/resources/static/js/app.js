
angular.module('superbarberApp', [])
.controller('AppointmentController', function($scope, $http) {
    $scope.appointments = [];
    $scope.loading = false;
    $scope.error = null;
    $scope.newAppointment = {
        cliente: '',
        servico: '',
        barbeiro: '',
        dataHora: ''
    };
    
    $scope.formatDate = function(date) {
        return new Date(date).toLocaleString('pt-BR');
    };
    
    $scope.loadAppointments = function() {
        $scope.loading = true;
        $scope.error = null;
        
        $http.get('/api/agendamentos')
            .then(function(response) {
                $scope.appointments = response.data;
                $scope.loading = false;
            })
            .catch(function(error) {
                $scope.error = 'Erro ao carregar agendamentos. Tente novamente mais tarde.';
                $scope.loading = false;
                console.error('Erro ao carregar agendamentos:', error);
            });
    };
    
    $scope.scheduleAppointment = function() {
        $scope.loading = true;
        $scope.error = null;
        
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
                $scope.loading = false;
            })
            .catch(function(error) {
                $scope.error = 'Erro ao realizar agendamento. Tente novamente.';
                $scope.loading = false;
                console.error('Erro ao realizar agendamento:', error);
            });
    };
    
    // Initial load
    $scope.loadAppointments();
});
