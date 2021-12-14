import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient) { }

  getMemes(): Observable<any> {
    return this.http.get("https://api.imgflip.com/get_memes")
  }
}
