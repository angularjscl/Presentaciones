/**
 * Created by gbelmm on 29-01-15.
 */
angular.module('app').filter('slice', function() {

    return function(arr, start, end) {
        if ( arr ) {
            if (start<0)
            { start=0;end=3 }
            return arr.slice(start, end);
        }
    };
});