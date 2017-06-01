export default function ComponentService($http){
    function getRepos() {
        return $http.get('https://api.github.com/users/GUMGA/repos?access_token=66d50ddaf48b775369aa6484610dd04b594e205c')
    }

    const Service = {
        getRepos: getRepos
    };

    return Service;
}

ComponentService.$inject = ['$http'];
