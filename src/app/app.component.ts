import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abdo';
  showWebitem: boolean;
  weblangName = [
    {'linkSite':'https://angular.io/tutorial', 'nameSite':'Tour of Heroes',},
    {'linkSite':'ttps://github.com/angular/angular-cli/wiki', 'nameSite':'CLI Documentation',},
    {'linkSite':'https://blog.angular.io//', 'nameSite':'Angular blog',},
  ];

  constructor() {
    this.showWebitem = true; 
  }

  showWeb() {
    this.showWebitem = !this.showWebitem; 
  }
  
}
