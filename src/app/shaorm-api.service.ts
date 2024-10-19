import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShaormAPIService {
  private url = environment.apiUrl;
  token = undefined;

  constructor(
    public auth: AuthService,
    private http: HttpClient
  ) {
    // this.auth.getAccessTokenSilently().subscribe(authData => {
    //   (this.token as any) = authData;
    // })    
  }

  goGetSomething(path: string): void {
    this.http.get(`${this.url}/${path}`).subscribe({
      
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })

  }


}
