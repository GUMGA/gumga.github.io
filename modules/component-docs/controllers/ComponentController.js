class ComponentController {

    constructor(ComponentService) {
        'ngInject';
        this.service = ComponentService
        this.repos = [];
    }

    $onInit() {
        // let onlyFront = value =>
        let repos;
        this.service.getRepos()
            .then(res => {
                this.repos = res.data.filter(value => value.name.indexOf('gumga-') > -1)
            })
      this.navMenu = [
          {
            label: 'Começando'
          }
      ]

      this.getRamdomColor = (repo) => {
        if(repo.homepage){
          return '#009688';
        }else{
          return '#F11C00';
        }
      }
    }


}

ComponentController.$inject = ['ComponentService'];

export { ComponentController }
