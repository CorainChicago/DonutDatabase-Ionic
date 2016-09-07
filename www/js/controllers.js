angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})
.controller('DonutsCtrl', function($scope, $location) {
  $scope.go = function ( path ) {
    $location.path( path );
  };
})

.controller('DonutShopsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AboutCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
