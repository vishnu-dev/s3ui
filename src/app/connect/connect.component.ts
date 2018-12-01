import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  @ViewChild('alert') alert: ElementRef;
  private user = {};
  config_status = true;
  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  closeAlert() {
    this.alert.nativeElement.classList.add('invisible');
  }

  readConfig() {
    this.apiService.
    getConfig().
    subscribe((data: string) => {
      console.log('Getting config...');
      data = JSON.parse(data);
      data['name'] = 'default';
      this.user = data;
      console.log('Done');
    }, (error => {
      console.error(error);
      this.config_status = false;
    }));
  }
  postConfig(name, id, key) {
    const data = {'name': name, 'id': id, 'key': key};
    this.apiService.
    setConfig(data);
    this.router.navigate(['buckets']);
  }
}

@Pipe({name: 'replaceStar'})
export class ReplaceStar implements PipeTransform {
  transform(value: string): string {
    return value.replace(/./g, '\*');
  }
}
