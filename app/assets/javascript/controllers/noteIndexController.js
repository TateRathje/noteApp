angular.module('NoteApp').controller('NotesIndexController', function(Note, $scope) {
  $scope.notes = Note.query();
  $scope.search = {};
  window.sc = $scope;
});
