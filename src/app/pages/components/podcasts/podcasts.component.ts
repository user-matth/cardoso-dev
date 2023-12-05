import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {

  originalProjects = [
    {
      'title': 'Debugando Podcast',
      'description': "Desvendando o Mundo do Desenvolvimento Multiplataforma com Flutter",
      'image': 'assets/images/ab67656300005f1f696b5d7c817d140a6e53c11f.jpg',
      'year': '2023',
      'link': 'https://open.spotify.com/episode/3PHy32YFFI0S6Wbeb0MQJi?si=Kwo3qeIlTGSR1CZjvIs_aQ'
    },
  ];
  projects = [...this.originalProjects];

  constructor() { }

  ngOnInit() {
  }

}
