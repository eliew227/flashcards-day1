var app = angular.module('FlashCards', ['ui.router']);

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/view',
		templateUrl: 'templates/main.html',
		controller: 'MainController'
	});

    $stateProvider.state('main.category', {
        url: '/:categoryName',
        templateUrl: 'templates/category.html',
        controller: 'CategoryController'
    });

	$stateProvider.state('add', {
		url: '/add',
		templateUrl: 'templates/add.html',
		controller: 'NewCardController'
	});	

	$stateProvider.state('statistics', {
		url: '/statistics',
		templateUrl: 'templates/statistics.html',
		controller: 'StatsController'
	});		

	$stateProvider.state('manageCard', {
		url: '/manageCard/:cardId',
		templateUrl: 'templates/manageCard.html',
		controller: 'CardController',
		resolve: {
			cardData: function(FlashCardsFactory, $stateParams) {
				return FlashCardsFactory.getCard($stateParams.cardId);
			}
		}
	});	

	$stateProvider.state('manageCard.edit', {
		url: '/edit',
		templateUrl: 'templates/edit.html',
		controller: 'CardController'
	});	

	$stateProvider.state('manageCard.delete', {
		url: '/delete',
		templateUrl: 'templates/delete.html',
		controller: 'CardController'
	});		

});







