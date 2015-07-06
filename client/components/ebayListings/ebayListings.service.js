'use strict';

angular.module('mbcManagerApp')
    .factory('EbayListings', function($cacheFactory, $resource) {
        // return $resource('/api/listings/:id/:controller', {
        // 
        return {
            EbayListings: $resource('http://mydomain.com/siliconehose/functions/resourceJson.php', {
                //return $resource('http://mydomain.com/siliconehose/functions/jsonTest.php?itemID=', {
                itemID: '@itemID'
            }, {
                getArray: {
                    method: 'GET',
                    cache: true,
                    isArray: true
                },
                getOne: {
                    method: 'GET',
                    cache: true,
                    isArray: false
                }
            })
        };


    });
