export default function ComponentService($http){
    function getRepos() {
        return $http.get('https://api.github.com/users/GUMGA/repos?access_token=a9d1505678d6c828078190db4245c313619cd635')
    }

    const Service = {
        getRepos: getRepos
    };

    
    
    return Service;
}

ComponentService.$inject = ['$http'];
