/**
 * Created by Joshua Baert on 10/31/2016.
 */

angular.module('devmtnTravel').controller('mainCtrl', function ($scope, mainSrv) {
	
	$scope.locations = mainSrv.travelInfo
	
});