angular.module('NoteApp').controller('UsersIndexController', function(User, $scope){
	$scope.users = User.query();
	$scope.search = {};
});