angular.module('NoteApp').factory('User', function($resource){
	return $resource('/users/:id');
});