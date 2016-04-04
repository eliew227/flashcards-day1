app.directive('flashCard', function(ScoreFactory) {
    return {
        restrict: 'E',
        templateUrl: '/js/directives/flashcard/flashcard.html',
        link: function(scope, element, attrs) {
            scope.answerQuestion = function(answer) {
                scope.answered = true;
                scope.answeredCorrectly = answer.correct;
                if (answer.correct) ScoreFactory.correct++;
                else ScoreFactory.incorrect++;
            };
        },
        scope: {
        	card: '='
        }
    };
});
