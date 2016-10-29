angularModule('NoteWrangler')
.controller('NoteCreateController', function($http){
	var controller = this;
	this.saveNote = function(note) {
		controller.errors = null;
		$http({method: 'POST', url: '/notes', data: note})
		.catch(function(note){
			controller.errors = note.data.error;

			//to show it:: 
			// <p ng-if="createController.errors">{{createController.errors}}</p>
		})

	};
})