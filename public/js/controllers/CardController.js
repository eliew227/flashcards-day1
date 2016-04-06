app.controller('CardController', function($scope, $stateParams, FlashCardsFactory, $state, cardData) {
	$scope.cardId = $stateParams.cardId;
	$scope.deleteCard = function() {
		FlashCardsFactory.deleteCard($scope.cardId)
		.then(function() {
			$state.go('main');
		});
	};
	$scope.updateCard = cardData;
	$scope.updateThisCard = function () {
		FlashCardsFactory.updateCard($scope.updateCard)
		.then(function() {
			$state.go('main');
		});
	};
});