var projectsModule = angular.module('projectsModule', []);

projectsModule.controller("projectsController", function ($scope){
    $scope.devs = [
        {id: 1,	nome: 'Carlos Mello', email: 'carlos@gmail.com', username: 'carlosMell', github: 'https://github.com/melloCarlo', linkedin:	'https://www.linkedin.com/in'},

        {id: 2,	nome: 'Ana Rose', email: 'ana@gmail.com', username: 'anaRo', github: 'https://github.com/roseAna', linkedin: 'https://www.linkedin.com/4inana'},

        {id: 3,	nome: 'Jack Purple',email: 'jack@hotmail.com', username: 'jackp', github: 'https://github.com/purpleJack', linkedin: 'https://www.linkedin.com/inpurple'}
    ];

    $scope.projects = [
        {id: 1,	nome: 'VENDAS COM JAVAFX', autor: {id: 1,	nome: 'Carlos Mello', email: 'carlos@gmail.com', username: 'carlosMell', github: 'https://github.com/melloCarlo', linkedin:	'https://www.linkedin.com/in'}, link: 'http://127.0.0.1:5500/src/pages/index.html'},

        {id: 2,	nome: 'SPRING IONIC', autor: {id: 2,	nome: 'Ana Rose', email: 'ana@gmail.com', username: 'anaRo', github: 'https://github.com/roseAna', linkedin: 'https://www.linkedin.com/4inana'}, link: 'https://www.instagram.com/' },

        {id: 3,	nome: 'PORTIFOLIO',autor: {id: 3,	nome: 'Jack Purple',email: 'jack@hotmail.com', username: 'jackp', github: 'https://github.com/purpleJack', linkedin: 'https://www.linkedin.com/inpurple'}, link: 'udemy.com'}
    ];

    
    $scope.selecionarProject = function(projectSelecionado){
        $scope.project = projectSelecionado;
    }

    $scope.clean = function(){
        $scope.project = null;
    }

    $scope.save = function(){
        $scope.projects.push($scope.project);
        $scope.clean();
    }

    $scope.delete = function(){
        $scope.projects.splice($scope.projects.indexOf($scope.project), 1);
        $scope.clean();
    }
});