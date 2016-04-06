app.factory('FlashCardsFactory', function ($http, $log) {
    var FlashCardsFactory = {};

    var cachedCards = [];
    var cachedCategory;

    FlashCardsFactory.getFlashCards = function (category) {
        var queryParams = {};

        if (category) {
            queryParams.category = category;
            cachedCategory = category;
        }

        return $http.get('/cards', {
            params: queryParams
        }).then(function (response) {
            angular.copy(response.data, cachedCards);
            return cachedCards;
        });
    };

    FlashCardsFactory.createNewCard = function (newCard) {
        return $http.post('/cards', newCard)
        .then(function(res){
            if (!cachedCategory || cachedCategory === newCard.category) cachedCards.push(res.data);
            return res.data;
        });
    };

    FlashCardsFactory.deleteCard = function (cardId) {
        return $http.delete('/cards/' + cardId)
        .then(function () {
            return;
        });
    };

    FlashCardsFactory.getCard = function (cardId) {
        return $http.get('/cards/' + cardId)
        .then(function (res) {
            return res.data;
        });
    };

    FlashCardsFactory.updateCard = function (card) {
        return $http.put('/cards', card)
        .then(function(){
            return;
        });
    };

    return FlashCardsFactory;
});