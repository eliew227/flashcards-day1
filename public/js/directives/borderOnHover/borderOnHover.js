app.directive('borderOnHover', function(ScoreFactory) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('mouseenter', function () {
                element.addClass('mouseover');
            });
            element.on('mouseout', function () {
                element.removeClass('mouseover');
            });
        }
    };
});
