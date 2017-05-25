angular.module('app')
  .controller('VersionController', function($http){

    var ctrl = this;
    var url = location.href.split('/')
    ctrl.version = url[url.length - 1] ? url[url.length - 1] : url[url.length - 2]

    $http.get('../versions.json').then(function(resp){
      ctrl.versions = resp.data;
    })

  })
