/**
 * Created by Joshua Baert on 10/31/2016.
 */

angular.module('devmtnTravel').controller('packagesCtrl', function ($scope, mainSrv, $stateParams) {
	
	$scope.locations = mainSrv.travelInfo;
	
});