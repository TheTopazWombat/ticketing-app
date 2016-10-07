angular.module('app')
    .directive("stopwatch",
        function() {
            return {
                // create isolated scope
                // scope: {
                //     cust: '=',
                // },
                templateUrl: './directives/timer.html',
                controller: function($scope, $interval) {
                    $scope.counter = 0;
                    $scope.runClock = null;

                    function displayTime() {
                      // if ($scope.cust.time) {
                      //
                      // }
                        $scope.cust.time = moment().hour(0).minute(0).second($scope.cust.counter++).format('HH : mm : ss');
                    }

                    $scope.start = function() {
                        if ($scope.runClock === null) {
                            $scope.runClock = $interval(displayTime, 1000);
                        }
                        console.log($scope.cust);
                        // console.log($scope.time);
                        console.log($scope.cust.time);
                    };

                    $scope.stop = function() {
                        $interval.cancel($scope.runClock);
                        $scope.runClock = null;
                        // $scope.cust.time = $scope.time;
                        $scope.saveJobData($scope.cust);
                        console.log($scope.customers);
                    };

                    // $scope.reset = function() {
                    //     $scope.counter = 0;
                    //     displayTime();
                    // };

                }

            };
        }
    );
