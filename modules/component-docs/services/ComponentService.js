export default function ComponentService($http){
    function getRepos() {
        return $http.get('https://api.github.com/users/GUMGA/repos?per_page=10000&access_token=' + atob(window.TOKEN))
        // return $http.get('https://api.github.com/users/GUMGA/repos')
    }

    const Service = {
        getRepos: getRepos
    };





    return Service;
}

ComponentService.$inject = ['$http'];
