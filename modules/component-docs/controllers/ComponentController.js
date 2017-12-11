class ComponentController {

    constructor(ComponentService) {
        'ngInject';
        this.service = ComponentService
        this.repos = [];
    }

    $onInit() {
      let repos;
      this.service.getRepos()
          .then(res => {
              this.repos = res.data.filter(value => value.name.includes('gumga-') || value.name.includes('simple-dashboard'));
              this.repos.push({
                html_url: 'https://gumga.github.io/#/app/video',
                homepage: 'https://gumga.github.io/#/app/video',
                name: 'video',
                description: 'Componente de video do HTML5.',
                updated_at: new Date()
              })
          });

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

      this.redirectTo = (url) => {
        location.href = url;
      }

    }


}

ComponentController.$inject = ['ComponentService'];

export { ComponentController }
