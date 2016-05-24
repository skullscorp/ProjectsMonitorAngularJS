'use strict';

angular.module('awesome-app.tabs', ['ui.router', 'ui.router.tabs'])
    .config(function config($stateProvider) {

    $stateProvider
        .state('tabs.choose', {
            url: '^/choose',
            templateUrl: 'choose/choose.tpl.html',
            controller: 'ChooseCtrl'

        });
});