/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-number-filter.

    cc-number-filter is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-number-filter is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-number-filter.  If not, see <http://www.gnu.org/licenses/>.

*/
'use strict';

angular.module('cc.number.filters', [])
    .filter('shownonzero', function () {
        return function (input) {
            if(Number(input) === 0){
                return '';
            }

            return input;
        };
    })
    .filter('pnumber', ['$filter', 'utils', function($filter, utils){
        return function(number, minSize, maxSize){
            number = Number(number);
            if(!number){
                return '';
            }
            var maxSizeNumber = Number(number.toFixed(maxSize));
            var precision = utils.precision(maxSizeNumber);

            if(precision > minSize && precision <= maxSize){
                return $filter('number')(number, precision);
            }
            else {
                return $filter('number')(number, minSize);
            }
        }
    }]);
