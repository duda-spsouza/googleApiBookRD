bookApp.controller('BookListCtrl', function ($scope, BookService,$window) {
    
    //pesquisa  dos livros da api google
    $scope.searchTerm = "jQuery";

    $scope.bookSearch = function () {
        BookService.get({ q: $scope.searchTerm }, function (response) {

            $scope.bookResults = response.items;
            $scope.orderProp = 'volumeInfo.title';
            
        });
    };
    //eventos do modais
    $scope.open = function() {
        $scope.showModal = true;
    };

    $scope.ok = function() {
        $scope.showModal = false;
    };

    $scope.cancel = function() {
        $scope.showModal = false;
    };
    
    // valores inicias
      $scope.myVar = false;
      $scope.currentlyStored = "Meu Livro Favorito";
      
      $scope.updateStorage = function(){
        $window.localStorage['key'] = $scope.myVar;
        $scope.currentlyStored = $window.localStorage['key'];
      };
    
});

