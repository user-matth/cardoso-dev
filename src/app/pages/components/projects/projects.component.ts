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
      'title': 'Rode Rotas',
      'description': "Used by more than 50k users, this project provide purchase of bus tickets for travel.",
      'image': 'assets/images/Instagram story - 2.png',
      'year': '2022',
      'link': 'https://roderotas.com/'
    },
    {
      'title': 'Smart Miles',
      'description': "A platform that you can control your own miles and also manage your family or friends's miles.",
      'image': 'assets/images/Instagram story - 1.png',
      'year': '2022',
      'link': 'https://smartmiles.com.br/'
    },
    {
      'title': 'LIGA',
      'description': "A ticket sales system with tools to manage your event. Financial planning, checklist, accounts payable, and much more to bring automation and security to you.",
      'image': 'assets/images/Instagram story - 4.png',
      'year': '2023',
      'link': 'https://apps.apple.com/br/app/liga/id6446912540'
    },
    {
      'title': '4Selet Produtor',
      'description': "An app made for producers that sells their products at 4Selet.",
      'image': 'assets/images/Instagram story - 3.png',
      'year': '2023',
      'link': 'https://apps.apple.com/br/app/4selet-produtor/id6463662278'
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

}
