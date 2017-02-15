import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<ul>
                  <li><a routerLink="/">Home</a></li>
                  <li><a routerLink="/about">About</a></li>
              </ul>
              <hr />
            <h1>Hello {{name}}</h1>
             <p>Email: {{email}}</p>
                <form>
                    <label>Name: </label>
                    <input type="text" name="name" [(ngModel)]="name" />
                </form><br /><br />
              <router-outlet></router-outlet>
            `,
  styles: [
    `h1 {
      color: #bc3a5a;
    }`  
  ]
})
export class AppComponent  { 
  name: string;
  email: string;
  constructor(){
    this.name = "Harish Jose";
    this.email = "mail@gmail.com";

  }

}