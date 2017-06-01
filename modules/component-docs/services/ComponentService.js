export default function ComponentService($http){
    function getRepos() {
        return $http.get('https://api.github.com/users/GUMGA/repos?access_token='+window.TOKEN)
    }

    const Service = {
        getRepos: getRepos
    };



    return Service;
}

ComponentService.$inject = ['$http'];
