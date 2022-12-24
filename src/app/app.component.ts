import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <nav class='navbar navbar-expand navbar-dark bg-dark'>
        <a class='navbar-brand'> {{title}}</a>
        <ul class='nav nav-pills navbar-dark'>
          <li><a class='nav-link ' routerLinkActive='active' routerLink='/candidate'>Candidates</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/project'>Projects</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/panelmember'>Panel Members</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/stream'>Streams</a></li>
        </ul>
    </nav>

    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interview Managment ';
}
