import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = ([
  {
    path: 'a', component: AComponent
  },
  {
    path: 'b', component: BComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
