angular.module('devmtnTravel', ['ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
					.state('locations', {
						url: '/locations',
						templateUrl: "views/locations.html"
					})
					.state('packages', {
						url: '/packages',
						templateUrl: "views/packages.html"
					})
					.state('about', {
						url: '/about',
						templateUrl: "views/about.html"
					})
					.state('about-adventurers', {
						url: '/about',
						templateUrl: "views/about-adventurers.html"
					})
					.state('contact', {
						url: '/contact',
						templateUrl: "views/contact.html"
					})
					.state('home', {
						url: '/',
						templateUrl: "views/about.html"
					})
					.state('booked', {
						url: '/booked',
						templateUrl: 'views/booked.html'
					});
			
			/*$urlRouterProvider
			 .otherwise('/');*/
		});
