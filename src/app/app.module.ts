import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';

const appRoutes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two',      component: TwoComponent },
  { path: '**',
    redirectTo: '/one',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    OneModule,
    TwoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
