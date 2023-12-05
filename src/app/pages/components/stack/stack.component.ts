import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  search: string = '';
  originalStacks = [
    {
      'title': 'Arc',
      'image': 'assets/images/stack/arc.png',
      'type': 'Browser',
      'link': 'https://arc.net/'
    },
    {
      'title': 'Chat GPT',
      'image': 'assets/images/stack/chatgpt.png',
      'type': 'AI Assistant',
      'link': 'https://chat.openai.com/auth/login'
    },
    {
      'title': 'Dbeaver',
      'image': 'assets/images/stack/dbeaver.png',
      'type': 'Database Tool',
      'link': 'https://dbeaver.io/'
    },
    {
      'title': 'Figma',
      'image': 'assets/images/stack/figma.png',
      'type': 'Design',
      'link': 'https://www.figma.com/'
    },

    {
      'title': 'Github',
      'image': 'assets/images/stack/github.png',
      'type': 'Version Control',
      'link': 'https://github.com/'
    },
    {
      'title': 'Jira',
      'image': 'assets/images/stack/jira.png',
      'type': 'Task Tracking',
      'link': 'https://www.atlassian.com/software/jira'
    },
    {
      'title': 'Notion',
      'image': 'assets/images/stack/notion.png',
      'type': 'Note Taking',
      'link': 'https://www.notion.so/'
    },
    {
      'title': 'Obsidian',
      'image': 'assets/images/stack/obsidian.png',
      'type': 'Note Taking',
      'link': 'https://obsidian.md/'
    },

    {
      'title': 'Postman',
      'image': 'assets/images/stack/postman.png',
      'type': 'API Testing',
      'link': 'https://www.postman.com/'
    },
    {
      'title': 'Simulator',
      'image': 'assets/images/stack/simulator.png',
      'type': 'iOS Simulator',
      'link': 'https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device'
    },
    {
      'title': 'Slack',
      'image': 'assets/images/stack/slack.png',
      'type': 'Team Communication',
      'link': 'https://slack.com/'
    },
    {
      'title': 'VSCode',
      'image': 'assets/images/stack/vscode.png',
      'type': 'IDE',
      'link': 'https://code.visualstudio.com/'
    },

    {
      'title': 'Warp',
      'image': 'assets/images/stack/warp.png',
      'type': 'Browser',
      'link': 'https://www.warp.dev/'
    },
    {
      'title': 'XCode',
      'image': 'assets/images/stack/xcode.png',
      'type': 'IDE',
      'link': 'https://developer.apple.com/xcode/'
    },
    {
      'title': 'zsh',
      'image': 'assets/images/stack/zsh.png',
      'type': 'Terminal',
      'link': 'https://developer.apple.com/'
    },
    {
      'title': 'Spotify',
      'image': 'assets/images/stack/spotify.png',
      'type': 'Music',
      'link': 'https://www.spotify.com/'
    },
  ];
  stacks = [...this.originalStacks];

  constructor() { }

  ngOnInit() {
  }

  searchbar() {
    this.stacks = this.originalStacks.filter((project) => {
      return project.title.toLowerCase().includes(this.search.toLowerCase());
    });
  }

}
