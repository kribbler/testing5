(function(){


angular.module('NoteWrangler').config(function($routeProvider){
	$routeProvider.when('/notes', {
		templateUrl: '/templates/pages/notes/index.html',
		controller: function(){}
	})

	.when('/users', {
		templateUrl: '/templates/pages/users/index.html'
	})

	.when('/', {
		templateUrl: '/templates/pages/notes/index.html'
	})

	.when('/notes/:id', {
		templateUrl: 'templates/pages/notes/show.html',
		controller: 'NoteShowController',
		controllerAs: 'showController'
	})

	.otherwise({
		redirectTo: '/'
	});
});

});
