/**
 * Created by Joshua Baert on 10/31/2016.
 */

angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, mainSrv, $stateParams) {
	
	var id = parseInt($stateParams.id);
	var cities = mainSrv.travelInfo;
	
	function findBooked() {
		for (var i = 0; i < cities.length; i++) {
			if(id === cities[i].id) {
				$scope.booked = cities[i].city
			}
		}
	}
	
	findBooked();
	
});