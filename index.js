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

var LAST_VERSION = '3.2.0';

var version = sessionStorage.getItem('currrentVersion') || LAST_VERSION;

function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send( null );
    return xmlHttp.status;
}

if(httpGet('gumga-js/components/'+version+'/gumga.min.js') != 200){
    sessionStorage.setItem('currrentVersion', LAST_VERSION);
    location.reload();
}

require('script-loader!./gumga-js/components/'+version+'/gumga.min.js');

// Modules imports
import Directives from './modules/directives/directives'

import Home from './modules/home/home'
import Components from './modules/components-docs/components-docs'

//Imports Configs
import Routers from './routers'

angular.module('app', [
     UiRouter
    ,AngularAria
    ,AngularAnimate
    ,Directives
    ,Home
    ,Components
    ,'ngImgCrop'
    ,'gumga.core'
    ,'ui.bootstrap'
    ,'gumga.layout'
  ])
  .config(Routers)
  .run(['$rootScope', '$timeout', ($rootScope, $timeout) => {
    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
        if(toParams && toParams.version && toParams.version != version){
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
