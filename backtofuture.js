angular.module('backtofuture', [])
    .directive('martin', [
        '$interval',
        function($interval) {
            return {
                link: function(scope, element, attrs) {
                    $interval(function() {
                        $(element).addClass('delorean')
                            .attr('src', 'images/delorean.png');
                        $(element).css('left', '1500px').show();
                        $(element).animate({
                            left: '-250px'
                        }, 2000, 'swing', function() {
                            $(element).hide();
                        });
                    }, 1000 * 60);
                }
            };
        }
    ]);
