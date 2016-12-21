angular.module('NoteApp').controller('NotesEditController', function(Note, $scope, $routeParams){
	$scope.note = Note.get({id: $routeParams.id});	
});