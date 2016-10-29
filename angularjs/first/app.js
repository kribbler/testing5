(function() {
	var app = angular.module("store", ['store-producs']);

	app.controller('StoreController', ['$http', function($http){
		var store = this;

		store.products = [ ];
		$http({
			method: 'GET',
			url: '/products.json'
		}).success(function(data){
			store.products = data;
		});

		this.products = $http.get(
			'/products.json', {
				apiKey: 'myKey'
			}
		);

		$http.post('path/to/resource.json', {param: 'value'});
		$http.delete('path/to/resource.json');
		$http({method: 'OPTIONS', url: 'the_url'});
		$http({method: 'PATCH', url: 'the_url'});
		$http({method: 'TRACE', url: 'the_url'});
	]});

	app.controller('SomeController', ['$http', function($http){

	}]);

	app.controller('SomeController', ['$http', '$log', function($http, $log){

	}]);



	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	

	var gems = [
		{
			name: "Dode",
			price: 2,
			description: "xodfiufiu",
			canPurchase: true,
			soldOut: false,
			date: "2015-11-11",
			images: [
				{
					full: 'images/facebook.gif',
					small: 'images/facebook.gif'
				},
			],
			reviews: [
				{
					'body': 'ddd',
					'author': 'da@g.c',
					'stars': '3'
				}
			]
		},
		{
			name: "Dode2",
			price: 3.95,
			description: "xSecond Produt",
			canPurchase: true,
			soldOut: false,
			date: "2014-10-12",
			images: [
				{
					full: 'images/twitter.gif',
					small: 'images/twitter.gif'
				},
			],
			reviews: [
				{
					'body': 'ddd',
					'author': 'da@g.c',
					'stars': '3'
				}
			]
		},
	];
})();