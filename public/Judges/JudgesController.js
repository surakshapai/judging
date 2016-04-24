angular.module('liveJudgingApp')
	.controller('JudgesController', function($scope, ApiConnect) {
		$scope.judges;

		/*
		
		var getAllJudges = function() {
			ApiConnect.getEventJudges($scope.currentEventID)
				.then(data) {
					$scope.judges = data.judges;
				}
				.catch(error) {
					console.log("Error in JudgesController getting all judges" + error);
				}
		}

		var addNewJudge = function() {
			var newJudge = {'name': $scope.judgeName, 'ID': $scope.judgeID}
			ApiConnect.postNewJudge($scope.currentEventID, newJudge)
				.then(data) {
					$scope.judges.push(data.newJudge);
					$location.path('/dashboard/events/cic/judges');
				}
				.catch(error) {
					console.log("Error in JudgesController adding a new judge" + error);
				}
		}
		*/
		$scope.judgesDummy = [{
			"id": 3,
			"event": {
				"id": 38,
				"name": "Stringtough",
				"location": "8696 Jamal Plain, Mozellborough Ohio",
				"start_time": "2015-08-11 10:58:26 AM",
				"end_time": "2015-08-11 11:52:57 AM",
				"map": null
			},
			"judge": {
				"id": 22,
				"email": "bridie_gusikowski@tremblay.net",
				"name": "Bridie Gusikowski",
				"admin": false
			}
		}, {
			"id": 4,
			"event": {
				"id": 38,
				"name": "Stringtough",
				"location": "8696 Jamal Plain, Mozellborough Ohio",
				"start_time": "2015-08-11 10:58:26 AM",
				"end_time": "2015-08-11 11:52:57 AM",
				"map": null
			},
			"judge": {
				"id": 23,
				"email": "cordell_hickle@ohara.com",
				"name": "Cordell Hickle",
				"admin": false
			}
		}, {
			"id": 5,
			"event": {
				"id": 38,
				"name": "Stringtough",
				"location": "8696 Jamal Plain, Mozellborough Ohio",
				"start_time": "2015-08-11 10:58:26 AM",
				"end_time": "2015-08-11 11:52:57 AM",
				"map": null
			},
			"judge": {
				"id": 24,
				"email": "fausto_block@rolfsonhowell.biz",
				"name": "Fausto Block",
				"admin": false
			}
		}]
	})