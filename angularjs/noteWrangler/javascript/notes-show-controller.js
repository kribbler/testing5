angularModule('NoteWrangler').
	controller('NoteShowController', function($http, $routeParams){
		var controller = this;
		$http({method: 'GET', url: '/notes/' + $routeParams.id})
		.success(function(data){
			controller.note = data;
		})

	})