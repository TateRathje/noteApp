angular.module('NoteApp').directive("naCategorySelector", function(Category){
	return {
		replace: true,
		restrict: "E",
		templateUrl: '/assets/templates/directives/naCategorySelector.html',
		link: function (scope, element, attrs) {
			scope.categories = Category.query();
		}
	};
});