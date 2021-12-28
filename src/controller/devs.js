var devsModule = angular.module('devsModule', []);

devsModule.controller("devsController", function ($scope){
    $scope.devs = [
        {id: 6,	nome: 'Carlos Mello', email: 'carlos@gmail.com', username: 'carlosMell', github: 'https://github.com/melloCarlo', linkedin:	'https://www.linkedin.com/in'},
        {id: 7,	nome: 'Ana Rose', email: 'ana@gmail.com', username: 'anaRo', github: 'https://github.com/roseAna', linkedin: 'https://www.linkedin.com/4inana'},
        {id: 8,	nome: 'Jack Purple',email: 'jack@hotmail.com', username: 'jackp', github: 'https://github.com/purpleJack', linkedin: 'https://www.linkedin.com/inpurple'},
    ];

    $scope.selecionarDev = function(devSelecionado){
        $scope.dev = devSelecionado;
    }

    $scope.clean = function(){
        $scope.dev = null;
    }

    $scope.save = function(){
        $scope.devs.push($scope.dev);
        $scope.clean();
    }

    $scope.delete = function(){
        $scope.devs.splice($scope.devs.indexOf($scope.dev), 1);
        $scope.clean();
    }
});