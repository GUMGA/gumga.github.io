export default function ComponentService($http){
    function getRepos() {
        return $http.get('https://api.github.com/users/GUMGA/repos?access_token=4b648a7c4221786b206d72befda884bbb8531556')
    }

    const Service = {
        getRepos: getRepos
    };

    return Service;
}

ComponentService.$inject = ['$http'];
