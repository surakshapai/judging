angular.module('liveJudgingApp')
	.factory('ApiConnect', function($http, $q) {
		var rootURL = 'https://tranquil-inlet-84934.herokuapp.com/';

		return {
			// Get all teams for event using event ID
			/*
			getEventTeams: function(eventId) {
				var deferred = $q.defer();
				$http.get(rootURL+'/events/'+eventId+'/teams')
					.success(data, status) {
						if(status === 200) {
							deferred.resolve({
								teams: data
							})
						} else {
							deferred.reject();
						}
					}
					.error(function(data) {
						deferred.reject({
							error: data;
						});
					})
				return deferred.promise;
			},

			// ApiConnect.postNewTeam(currentEventID, newTeam)

			postNewTeam: function(eventId, newTeamObj) {
				var deferred = $q.defer();
				$http.post(rootURL+'/events/'+eventId+'/teams')
					.success(data, status) {
						if(status === 200) {
							deferred.resolve({
								newTeam: data
							})
						} else {
							deferred.reject();
						}
					}
					.error(function(data) {
						deferred.reject({
							error:data
						})
					})
				return deferred.promise;
			},

			getEventJudges: function(eventID) {
				var deferred = $q.defer();
				$http.get(rootURL+'/events/'+eventID+'/judges')
					.success(data, status) {
						if(status === 200) {
							deferred.resolve({
								judges: data
							})
						} else {
							deferred.reject();
						}
					}
					.error(function(data) {
						deferred.reject({
							error: data
						})
					})
				return deferred.promise;
			},

			postNewJudge: function(eventID, newJudgeObj) {
				var deferred = $q.defer();
				$http.post(rootURL+'/events/'+eventID+'/judges', newJudgeObj)
					.success(data, status) {
						if(status === 201) {
							deferred.resolve({
								newJudge: data
							})
						} else {
							deferred.reject();
						}
					}
					.error(function(data) {
						deferred.reject({
							error:data
						})
					})
				return deferred.promise;
			}
			*/
		}
	})