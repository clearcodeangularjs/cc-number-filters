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

*/'use strict'

describe('basic filters', function(){
    beforeEach(module('sandboxApp'));

    describe('pnumberFilter', function(){
        var pnumberFilter;

        beforeEach(inject(function(_pnumberFilter_){
            pnumberFilter = _pnumberFilter_;
        }));

        it('should return more precise number if needed', function(){
            expect(pnumberFilter('100.0000', 2, 4)).toEqual('100.00');
            expect(pnumberFilter('100.0001', 2, 4)).toEqual('100.0001');
            expect(pnumberFilter('100.001', 2, 4)).toEqual('100.001');
            expect(pnumberFilter('100.01', 2, 4)).toEqual('100.01');
            expect(pnumberFilter('100.00001', 2, 4)).toEqual('100.00');
            expect(pnumberFilter('0.0001', 2, 4)).toEqual('0.0001');
            expect(pnumberFilter('12345.12345', 2, 4)).toEqual('12,345.1234');
            expect(pnumberFilter('-0.001000', 2, 4)).toEqual('-0.001');
        });

        it('should return empty string if not a number given', function(){
            expect(pnumberFilter('a1', 2, 4)).toEqual('');
        })
    });
});
