angular.module('NoteApp').directive('naPageNav', function(){
	return {
		replace: true,
		restrict: 'E',
		templateUrl: "assets/templates/directives/naPageNav.html",
		controller: function($scope, $location){
			$scope.isPage = function (name) {
				return new RegExp("/" + name + "($|/)").test($location.path());
			};
		}
	};
});