/**
 * Created by mainadmin on 29.02.16.
 */

var proApp = angular.module('ProApp', ['ui.router']);


proApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider.
        state('teams',{
               url:'/teams/{abbreviation}',
               templateUrl: "html/pages/teams.html",
               controller: "TeamsController"
           }
        ).
    state('team',{
               url:'/team/{abbreviation}',
               templateUrl: "html/pages/team.html",
               controller: "TeamsController"
           }
        ).
    state('player',{
               url:'/player/{name}',
               templateUrl: "html/pages/player.html",
               controller: "PlayerController"
           }
        );
});


proApp.controller('ProStatisticController', ['$scope', '$state', function ($scope, $state) {
    $scope.disciplines = [
        {name: "Counter Strike: Global Offencive", abbreviation: "CSGO"},
        {name: "Dota 2", abbreviation: "D2"},
        {name: "World of Tanks", abbreviation: "WOT"}
    ];

    $scope.changeState = function (abbreviation) {
        $state.go("teams", {"abbreviation": abbreviation});
    }
}]);


proApp.controller('TeamsController', ['$scope', '$state',  function($scope, $stateParams) {
    $scope.game = $stateParams.abbreviation;
    $scope.teams = [
        {name: "Natus Vincer", abbreviation: "navi"},
        {name: "fnatic", abbreviation: "fn"},
        {name: "Titan", abbreviation: "tit"}
    ];
}]);

proApp.controller('TeamController', ['$scope', '$state', function($scope, $stateParams) {
    $scope.game = $stateParams.abbreviation;
    $scope.team = [
        {name: "Zeus", abbreviation: "navi"},
        {name: "Edward", abbreviation: "fn"},
        {name: "Guardian", abbreviation: "tit"}
    ];
}]);

proApp.controller('PlayerController', ['$scope', '$state', function($scope, $stateParams) {
    $scope.game = $stateParams.abbreviation;
    $scope.player = [
        {name: "Zeus", abbreviation: "navi"}
    ];
}]);