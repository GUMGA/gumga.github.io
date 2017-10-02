angular.module('app')
  .controller('VersionController', function($http){

    var ctrl = this;
    var url = location.href.split('/')
    ctrl.version =  location.href.match(/[0-9].[0-9]{1,}.[0-9]/g)[0];
    window.version = ctrl.version

    $http.get('../versions.json').then(function(resp){
      ctrl.versions = resp.data;
    })
  
    var componentTitle = document.querySelector('a.navbar-brand');
    if(componentTitle){
//        componentTitle.href = "https://github.com/gumga/"+componentTitle.text;
       componentTitle.href = "https://gumga.github.io/#/app/component";
//        componentTitle.target = "_blank"; 
    }

  })
