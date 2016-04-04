app.controller('MainController', function($scope, FlashCardsFactory) {
    
    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.getCategoryCards = function (category) {
        $scope.loading = true;
        $scope.currentCategory = category;
        FlashCardsFactory.getFlashCards(category)
        .then(function(flashCards) {
            $scope.flashCards = flashCards;
            $scope.loading = false;
        });
    };

    $scope.getCategoryCards();

});