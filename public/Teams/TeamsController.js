angular.module('liveJudgingApp')
  .controller('TeamsController', ['$scope', 'ApiConnect', '$location', function($scope, ApiConnect, $location) {
/*
    // Get all the teams from backend
    var getEventTeams = function() {
      // Grab event ID from the event clicked
      var currentEventID = $scope.currentEvent;
      ApiConnect.getEventTeams(currentEventID);
        .then(data) {
          $scope.currentTeams = data.teams;
        }
        .error(error) {
          console.log("Error in getting teams for event" + currentEvent);
        }
    }

    var addNewTeam = function() {
      // Check for categories and judges!
      var currentEventID = $scope.currentEventID;
      var newTeam = {'name': $scope.teamName, 'categories': $scope.teamCategories, 'judges': $scope.teamJudgeName}
      ApiConnect.postNewTeam(currentEventID, newTeam)
        .then(data) {
          $scope.currentTeams.push(newTeam);
          $location.path('dashboard/events/cic/teams');
        }
        .error(error) {
          console.log("Error in TeamsController adding a new team");
        }
    }

*/
    // Dummy team data for view UI
    var teamData = [
  {
    "id": 18,
    "name": "Hirthe and Sons",
    "logo": null,
    "event": {
      "id": 57,
      "name": "Lotlux",
      "location": "1969 Kayleigh Manors, Claudineville Hawaii",
      "start_time": "2015-09-02 12:54:38 PM",
      "end_time": "2015-09-02 08:14:47 AM",
      "map": null
    },
    "categories": ["IOT", "Some other stuff"],
    "judges": ["JudgeA"]
  },
  {
    "id": 19,
    "name": "King-Parisian",
    "logo": null,
    "event": {
      "id": 57,
      "name": "Lotlux",
      "location": "1969 Kayleigh Manors, Claudineville Hawaii",
      "start_time": "2015-09-02 12:54:38 PM",
      "end_time": "2015-09-02 08:14:47 AM",
      "map": null
    },
    "categories": ["IOT", "Some other stuff"],
    "judges": ["JudgeB"]
  },
  {
    "id": 18,
    "name": "Hirthe and Sons",
    "logo": null,
    "event": {
      "id": 57,
      "name": "Lotlux",
      "location": "1969 Kayleigh Manors, Claudineville Hawaii",
      "start_time": "2015-09-02 12:54:38 PM",
      "end_time": "2015-09-02 08:14:47 AM",
      "map": null
    },
    "categories": ["IOT", "Some other stuff"],
    "judges": ["JudgeC"]
  },
  {
    "id": 19,
    "name": "King-Parisian",
    "logo": null,
    "event": {
      "id": 57,
      "name": "Lotlux",
      "location": "1969 Kayleigh Manors, Claudineville Hawaii",
      "start_time": "2015-09-02 12:54:38 PM",
      "end_time": "2015-09-02 08:14:47 AM",
      "map": null
    },
    "categories": ["IOT", "Some other stuff"],
    "judges": ["JudgeD"]
  }
];
      $scope.allTeams = teamData;
  }]);