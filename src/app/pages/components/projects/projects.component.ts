import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  search: string = '';
  originalProjects = [
    {
      'title': 'Complexo Vale do Cerrado',
      'description': "An app that provides a new way to buy and sell tickets, with a focus on the user experience and security.",
      'image': 'assets/images/vale_do_cerrado.png',
      'year': '2023',
      'link': 'https://www.valedocerrado.com.br/',
      'tags': [
        'Web',
        'Frontend',
        'TypeScript',
        'Angular'
      ]
    },
    {
      'title': 'Rode Rotas',
      'description': "Used by more than 50k users, this project provide purchase of bus tickets for travel.",
      'image': 'assets/images/Instagram story - 2.png',
      'year': '2022',
      'link': 'https://roderotas.com/',
      'tags': [
        'Web',
        'Frontend',
        'Backend',
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'TypeScript',
        'Angular'
      ]
    },
    {
      'title': 'LIGA',
      'description': "A ticket sales system with tools to manage your event. Financial planning, checklist, accounts payable, and much more to bring automation and security to you.",
      'image': 'assets/images/Instagram story - 4.png',
      'year': '2023',
      'link': 'https://apps.apple.com/br/app/liga/id6446912540',
      'tags': [
        'Mobile',
        'Flutter',
        'iOS',
        'Android',
      ]
    },
    {
      'title': 'LIGA - Validador',
      'description': "A ticket sales system with tools to manage your event. Financial planning, checklist, accounts payable, and much more to bring automation and security to you.",
      'image': 'assets/images/liga_validador.png',
      'year': '2023',
      'link': 'https://apps.apple.com/br/app/liga-validador/id6468666718',
      'tags': [
        'Mobile',
        'Flutter',
        'iOS',
        'Android',
      ]
    },
    {
      'title': '4Selet',
      'description': "A platform that you can buy and sell products from producers.",
      'image': 'assets/images/4selet_site.png',
      'year': '2024',
      'link': 'http://4selet.com.br',
      'tags': [
        'Web',
        'Wordpress',
      ]
    },
    {
      'title': '4Selet Produtor',
      'description': "An app made for producers that sells their products at 4Selet.",
      'image': 'assets/images/4selet_produtor.png',
      'year': '2023',
      'link': 'https://apps.apple.com/br/app/4selet-produtor/id6463662278',
      'tags': [
        'Mobile',
        'Flutter',
        'iOS',
        'Android',
      ]
    },
    {
      'title': 'Tik+',
      'description': "An app that provides a new way to buy and sell tickets, with a focus on the user experience and security.",
      'image': 'assets/images/tikmais.png',
      'year': '2024',
      'link': 'https://apps.apple.com/be/app/tik/id6474306676',
      'tags': [
        'Mobile',
        'Flutter',
        'iOS',
        'Android',
      ]
    },
    {
      'title': 'Tik+ Validador',
      'description': "An app buit to validate tickets from Tik+.",
      'image': 'assets/images/tikmais_validador.png',
      'year': '2024',
      'link': 'https://apps.apple.com/be/app/tik-validador/id6475402443',
      'tags': [
        'Mobile',
        'Flutter',
        'iOS',
        'Android',
      ]
    },
    {
      'title': 'Smart Miles',
      'description': "A platform that you can control your own miles and also manage your family or friends's miles.",
      'image': 'assets/images/Instagram story - 1.png',
      'year': '2022',
      'link': 'https://smartmiles.com.br/',
      'tags': [
        'Web',
        'Frontend',
        'TypeScript',
        'Angular',
        'Backend',
        'Ruby',
        'Rails',
      ]
    },
  ];
  projects = [...this.originalProjects];

  constructor() { }

  ngOnInit() {
  }

  searchbar() {
    this.projects = this.originalProjects.filter((project) => {
      return project.title.toLowerCase().includes(this.search.toLowerCase());
    });
  }

  filterProjectsByTitles(titles: string[]) {
    if (!titles.length) {
      this.projects = this.originalProjects;
      return;
    }
    this.projects = this.originalProjects.filter(project => 
      titles.some(title => project.title.toLowerCase() === title.toLowerCase())
    );
  }

}
