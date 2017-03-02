const Release = ($http) => {
  return {
      restrict: 'E',
      template: '<h4>O que há de novo?</h4><div btf-markdown="markdown"></div>',
      scope: {
          owner:'@',
          repo:'@',
          tag:'='
      },
      link: function (scope, element, attrs) {
          if(!scope.tag) {
              return;
          }

          $http.get('https://api.github.com/repos/'+scope.owner+'/'+scope.repo+'/releases/tags/' + scope.tag + '?access_token=c9ed246b5ba1547dd54cba566e69d2e78591ee9c')
              .then((response)=> {
                  scope.markdown = response.data.body && response.data.body.trim().length > 0 ? response.data.body : '###### Não há release disponível.';
          }, (error) => {
                  scope.markdown = '###### Não há release disponível.';
              });
      }
  };
}

Release.$inject = ['$http']

export default Release;
