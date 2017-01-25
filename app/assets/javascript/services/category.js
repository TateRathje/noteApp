angular.module('NoteApp').factory('Category', function($resource){
	return $resource('/categories/:id');
});