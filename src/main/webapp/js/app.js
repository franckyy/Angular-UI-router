var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'vues/partial-home.html'
        })
        
        .state('home.list', {
        	url: '/list',
        	templateUrl: 'vues/partial-home-list.html',
        	controller: function($scope) {
        		$scope.dogs = ['Bernese', 'Husky', 'Labrador'];
        	}
        })
        
        .state('home.paragraph', {
        	url: '/paragrph',
        	template: 'I could shure use a drink roight now.'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});