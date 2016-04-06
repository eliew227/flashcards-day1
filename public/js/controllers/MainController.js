app.controller('MainController', function($scope, $state) {
    
    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.getCategoryCards = function (category) {
        $scope.currentCategory = category;
        $state.go('main.category', {categoryName: category});
    };


});