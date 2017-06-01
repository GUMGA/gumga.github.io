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
    }


}

ComponentController.$inject = ['ComponentService'];

export { ComponentController }
