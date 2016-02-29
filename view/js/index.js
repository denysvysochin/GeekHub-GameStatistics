/**
 * Created by mainadmin on 29.02.16.
 */

angular.module('ProApp', [])
    .controller('ProStatisticController', function() {
        var proStatistic = this;
        proStatistic.disciplines = [
            {name: "Counter Strike: Global Offencive"},
            {name: "Dota 2"},
            {name: "World of Tanks"}
        ];
});