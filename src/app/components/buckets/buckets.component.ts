import {Component, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from '../../api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.scss']
})
export class BucketsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  buckets: any;
  headElements = ['Name', 'Creation Date'];
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
    };
    this.showBuckets();
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  showBuckets() {
    this.apiService.
    getBuckets().
    subscribe((data: string) => {
      data = JSON.parse(data);
      this.buckets = data['buckets'];
      this.dtTrigger.next();
    });
  }
}
