/**
 * Created by Joshua Baert on 10/31/2016.
 */

angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainSrv, $stateParams) {
	
	$scope.locations = mainSrv.travelInfo;
	
});