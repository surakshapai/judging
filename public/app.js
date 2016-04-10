var app = angular.module('liveJudgingApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('root', {
				url: '/home',
				templateUrl: 'mainBase.html'
			})
			.state('dashboard', {
				url: '/dashboard/home',
				templateUrl: 'events/eventsIndex.html'
			})
			.state('events',{
				url: '/events/{eventName}',
				templateUrl: 'events/event-partial.html', 
				redirectTo: 'events.teams'
			})
			.state('events.teams', {
				url: '/teams', 
				templateUrl: 'Teams/team-partial.html',
				controller: 'TeamsController'
			})
			.state('events.teams.edit', {
				url: '/edit/{teamId}',
				templateUrl: 'Teams/edit-team-partial.html',
				controller: 'TeamsController'
			})
			.state('events.addTeam', { //Handle deep nesting here!
				url: '/addTeam',
				templateUrl: 'Teams/add-team-partial.html',
				controller: 'TeamsController'
			})
			.state('events.judges', {
				url: '/judges',
				templateUrl: 'Judges/judges.html'
			})
			.state('judgeapp', {
				url: '/judgeapp',
				templateUrl: 'JudgeApp/judgesIndex.html',
				controller: 'JudgeHomeController',
				redirectTo: 'judgeapp.judgeTeams'
			})
			.state('judgeapp.judgeTeams', {
				url: '/judgeTeams',
				templateUrl: 'JudgeApp/judgeApp-judgeTeams-partial.html',
				controller: 'JudgeHomeController'
			})
			.state('judgeapp.judgeTeams.eachTeamDetails', {
				url: '/team/{teamId}',
				templateUrl: 'JudgeApp/judgeApp-eachTeam.html'
			})
			.state('judgeapp.allTeams', {
				url: '/allTeams',
				templateUrl: 'JudgeApp/judgeApp-allTeams-partial.html',
				controller: 'JudgeHomeController'
			})
	}]);

app.run(['$rootScope', '$state', function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params)
      }
    });
}]);