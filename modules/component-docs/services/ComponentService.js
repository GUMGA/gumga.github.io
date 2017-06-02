export default function ComponentService($http){
    function getRepos() {
        return $http.get('https://api.github.com/users/GUMGA/repos?access_token='+window.TOKEN)
        // return $http.get('https://api.github.com/users/GUMGA/repos')
    }

    const Service = {
        getRepos: getRepos
    };



    return Service;
}

ComponentService.$inject = ['$http'];
