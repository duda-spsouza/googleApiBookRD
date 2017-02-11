var bookApp = angular.module('bookApp', ['ngResource','ngRoute','angularUtils.directives.dirPagination','ui.bootstrap.modal']);

bookApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'ListaLivros.html',   controller: 'BookListCtrl'});
}]);
