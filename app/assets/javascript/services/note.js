angular.module('NoteApp').factory('Note', function($resource){
	return $resource('/notes/:id');
});