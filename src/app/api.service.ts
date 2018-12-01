import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  uri = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'POST',
      // 'Access-Control-Allow-Headers': 'Content-Type'
    })
  };
  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get(`${this.uri}/api/config`);
  }
  setConfig(data) {
    // console.log(data);
    return this.http.post(`${this.uri}/api/config`, data).subscribe((res) => {
      console.log(res);
    });
  }
  getBuckets() {
    return this.http.get(`${this.uri}/api/buckets`);
  }
}
