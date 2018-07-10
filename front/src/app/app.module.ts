import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { StoreModule } from '@ngrx/store';

import {AppComponent} from './app.component';
import {TaxComponent} from './components/tax/tax.components';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormField, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from './service/http.service';
import {LoginComponent} from './components/login/login.components';
import {AuthGuard} from './service/auth.guard';
import {TaxHistoryComponent} from './components/history/history.components';
import {reducers} from './app.states';

@NgModule({
  declarations: [
    AppComponent,
    TaxComponent,
    LoginComponent,
    TaxHistoryComponent
  ],
  imports: [
    FormsModule,
    StoreModule.forRoot(reducers),
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {path: 'tax', component: TaxComponent, canActivate: [AuthGuard]},
      {path: 'history', component: TaxHistoryComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: '**', redirectTo: '/login'}
    ])
  ],
  providers: [HttpService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [MatButtonModule, MatInputModule, MatListModule, MatFormFieldModule],
})
export class AppModule {
}
