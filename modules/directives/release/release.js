const Release = ($http) => {
  return {
      restrict: 'E',
      template: '<h4>O que há de novo?</h4><div btf-markdown="markdown"></div><div><label ng-show="loading">Buscando...</label></div>',
      scope: {
          owner:'@',
          repo:'@',
          tag:'='
      },
      link: function (scope, element, attrs) {
          scope.loading = true;
          if(!scope.tag) {
              scope.loading = false;
              return;
          }

          // $http.get('https://api.github.com/repos/'+scope.owner+'/'+scope.repo+'/releases/tags/' + scope.tag)
          $http.get('https://api.github.com/repos/'+scope.owner+'/'+scope.repo+'/releases/tags/' + scope.tag + '?access_token='+window.TOKEN)
              .then((response)=> {
                  scope.loading = false;
                  scope.markdown = response.data.body && response.data.body.trim().length > 0 ? response.data.body : '###### Sem novidades no momento.';
          }, (error) => {
                  scope.loading = false;
                  scope.markdown = '###### Sem novidades no momento.';
              });
      }
  };
}

Release.$inject = ['$http']

export default Release;
