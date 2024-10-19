import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthButtonComponent } from "./auth-button/auth-button.component";
import { ShaormAPIService } from "./shaorm-api.service"
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'shaormapp';
  
  constructor(
    public auth: AuthService,
    public shaormapi: ShaormAPIService,
  ) { }

  getSomething(path:string) {
    this.shaormapi.goGetSomething(path)
  }

  ngOnInit() {

  }


}
