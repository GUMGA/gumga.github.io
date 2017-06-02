angular.module('app')
  .controller('VersionController', function($http){

    var ctrl = this;
    var url = location.href.split('/')
    ctrl.version = url[url.length - 1] ? url[url.length - 1] : url[url.length - 2]
    window.version = ctrl.version

    $http.get('../versions.json').then(function(resp){
      ctrl.versions = resp.data;
    })
  
    var componentTitle = document.querySelector('a.navbar-brand');
    if(componentTitle){
       componentTitle.href = "https://github.com/gumga/"+componentTitle.text;
       componentTitle.target = "_blank"; 
    }

  })
