angular.module('app')
  .directive('newJob', [function() {
    return {
      templateUrl: './directives/newJob.html',
      link: function(scope, element, attr){
        setTimeout(function() {
            $('.new-job').removeClass('animated');
        }, 1000);
      }
    };
  }]);
