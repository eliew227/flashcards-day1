app.controller('MainController', function($scope, FlashCardsFactory) {

    FlashCardsFactory.getFlashCards()
    .then(function(flashCards) {
        $scope.flashCards = flashCards;
    });

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.getCategoryCards = function (category) {
        $scope.currentCategory = category;
        FlashCardsFactory.getFlashCards(category)
        .then(function(flashCards) {
            $scope.flashCards = flashCards;
        });
    };
});