import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { UpdatePersonComponent } from './update-person/update-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    UpdatePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"", component: HomeComponent},
      {path:"persons", component: PersonComponent},
      {path:"updatePerson/:id", component: UpdatePersonComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
