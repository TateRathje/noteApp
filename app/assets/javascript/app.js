angular.module('NoteApp', ['ngRoute', 'ngResource', 'ngGravatar']).config(function(GravatarProvider){
	GravatarProvider.setSize(100);
}); 