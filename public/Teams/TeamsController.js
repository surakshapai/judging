angular.module('liveJudgingApp')
  .controller('TeamsController', ['$scope', function($scope) {
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