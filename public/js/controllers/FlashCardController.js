app.controller('FlashCardController', function($scope, ScoreFactory) {
    $scope.answerQuestion = function(answer) {
        $scope.answered = true;
        $scope.answeredCorrectly = answer.correct;
        if (answer.correct) ScoreFactory.correct++;
        else ScoreFactory.incorrect++;
    };
});