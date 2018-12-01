import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConnectComponent, ReplaceStar } from './connect/connect.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { BucketsComponent } from './components/buckets/buckets.component';
import { DataTablesModule} from 'angular-datatables';

// import * as AWS from 'aws-sdk';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    ReplaceStar,
    BucketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
