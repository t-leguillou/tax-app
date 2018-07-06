import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaxComponent} from './components/tax/tax.components';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatListModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HttpService} from "./service/http.service";

@NgModule({
  declarations: [
    AppComponent,
    TaxComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'tax', component: TaxComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
