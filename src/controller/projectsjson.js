var projectsModule = angular.module('projectsModule', []);

projectsModule.controller("projectsController", function ($scope, $http){
    $http.get('../json/projects.json').then(function (response){
        $scope.projects = response.data.projects;
    })
});