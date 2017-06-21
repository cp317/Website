angular.module('todoController', ['ngMap'])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', 'NgMap', function($scope, $http, Todos, NgMap) {


		var vm = this;

		vm.currentIndex = 0;

		NgMap.getMap().then(function(map) {
			vm.map = map;
		});


		vm.selectNextCustomMarker = function() {
			vm.map.customMarkers[vm.currentIndex].removeClass('selected');
			vm.currentIndex = (vm.currentIndex+1) % vm.positions.length;
			vm.map.customMarkers[vm.currentIndex].addClass('selected');
			vm.currentPosition = vm.positions[vm.currentIndex];
		}


		$scope.cards = [{'university': "Wilfrid Laurier University", 'course':
		'CP317', 'description': 'Library', 'pos': [43.471944, -80.528956]}, {'university': "Wilfrid Laurier University", 'course':
			'COMP101', 'description': 'Science Building', 'pos': [43.473225, -80.525608]},
			{'university': "University Of Waterloo", 'course':
				'CS207', 'description': 'Dana Porter Library', 'pos': [43.469837, -80.542311]}];



	}]);