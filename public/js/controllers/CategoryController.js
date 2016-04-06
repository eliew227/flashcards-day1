app.controller('CategoryController', function ($scope, FlashCardsFactory, $stateParams) {
	var category = $stateParams.categoryName;
    $scope.loading = true;
    FlashCardsFactory.getFlashCards(category)
    .then(function(flashCards) {
        $scope.flashCards = flashCards;
        $scope.loading = false;
    });
});