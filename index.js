//Imports Libs
import angular from 'angular'
import UiRouter from 'angular-ui-router'
import AngularAria from 'angular-aria'
import AngularAnimate from 'angular-animate'

//Libs es5 - bower
require("script-loader!./bower_components/jquery/dist/jquery.min.js")
require("script-loader!./bower_components/bootstrap/dist/js/bootstrap.min.js")
require('script-loader!./gumga-layout/gumga-layout.min.js')
require('script-loader!./bower_components/ng-img-crop/compile/minified/ng-img-crop.js')
require('script-loader!./bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js')
require('script-loader!./bower_components/jquery/dist/jquery.min.js')
require('script-loader!./bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js')
require('script-loader!./assets/libs/run_prettify.min.js');
require('script-loader!./bower_components/angular-sanitize/angular-sanitize.min.js');
require('script-loader!./bower_components/showdown/src/showdown.js');
require('script-loader!./bower_components/angular-markdown-directive/markdown.js');


var LAST_VERSION = '3.3.2';

var version = sessionStorage.getItem('currrentVersion') || LAST_VERSION;

// function httpGet(url)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open('GET', url, true);
//     xmlHttp.send( null );
//     return xmlHttp.status;
// }

// if(httpGet('gumga-js/components/'+version+'/gumga.min.js') != 200){

//     sessionStorage.setItem('currrentVersion', LAST_VERSION);
//     if(version != LAST_VERSION){
//         location.href = location.href.replace(version, LAST_VERSION);
//         location.reload();
//     }

// }

require('script-loader!./gumga-js/components/'+version+'/gumga.min.js');

// Modules imports
import Directives from './modules/directives/directives'

import Home from './modules/home/home'
import Component from './modules/component-docs/component-docs'
import Components from './modules/components-docs/components-docs'
import Framework from './modules/framework-docs/framework-docs'
import Academy from './modules/academy/academy'
import SecurityEmbedded from './modules/security-embedded/security-embedded'

//Imports Configs
import Routers from './routers'

angular.module('app', [
     UiRouter
    ,AngularAria
    ,AngularAnimate
    ,Directives
    ,Home
    ,Component
    ,Components
    ,Framework
    ,Academy
    ,SecurityEmbedded
    ,'ngImgCrop'
    ,'gumga.core'
    ,'ui.bootstrap'
    ,'gumga.layout'
    ,'ngSanitize'
    ,'btford.markdown'
  ])
  .config(Routers)
  .run(['$rootScope', '$timeout', ($rootScope, $timeout) => {
    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
        if(toParams && toParams.version && toParams.version != version && toState.url.indexOf('componentsallinone') != -1){
            sessionStorage.setItem('currrentVersion', toParams.version);
           location.reload();
        }
        if(window.PR){
            $timeout(() => {
                PR.prettyPrint();
            }, 100);
        }
    })

  }])
