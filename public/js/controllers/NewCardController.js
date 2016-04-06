app.controller('NewCardController', function($scope, FlashCardsFactory, $state) {
    $scope.newCard = {
        question: null,
        category: null,
        answers: [
            { text: null, correct: false },
            { text: null, correct: false },
            { text: null, correct: false }
        ]
    };

    $scope.submitting = false;

    $scope.createNewCard = function () {
    	$scope.submitting = true;

        FlashCardsFactory.createNewCard($scope.newCard)
    	.then(function(newCard) {
    		$scope.submitting = false;
            $scope.newCard = {
		        question: null,
		        category: null,
		        answers: [
		            { text: null, correct: false },
		            { text: null, correct: false },
		            { text: null, correct: false }
		        ]
            };
            $state.go('main');
    	});
    };
});
