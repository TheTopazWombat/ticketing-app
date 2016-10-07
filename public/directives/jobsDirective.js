angular.module('app')
    .directive('jobsDirective', jobsDirective);

function jobsDirective() {
    return {
        templateUrl: './directives/job.html',
        link: function(scope, element, attr) {

            $(element).on('click', function() {
                $(this).addClass('currentJob');
            });
            setTimeout(function() {
                $('.list-job').removeClass('animated');
            }, 1000);
            if (!scope.cust.time) {
                scope.cust.time = "00 : 00 : 00";
            }
            if (scope.cust.counter > 3000) {
                $('#time-spent').css({
                    color: '#AA4B41',
                    'font-size': '24px'
                });
            }
            setTimeout(function() {
                $('.open-new-job').removeClass('animated');
            }, 1000);
            // $('.start-btn').on('click', function() {
            //     $('#time-spent').addClass('animated wobble infinite');
            //
            // });
            // $('.stop-btn').on('click', function() {
            //     $('#time-spent').removeClass('animated wobble infinite');
            // });
        }
    };
}
