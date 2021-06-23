import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson } from './person';
import { Subscription } from 'rxjs';
import { PersonService } from './person.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persons: IPerson[] = [];
  sub!: Subscription;
  errorMessage: any;
  constructor(private personService: PersonService) { }

  //id:Number = any;
  ngOnInit(): void {
    this.sub = this.personService.getPersons().subscribe({
      next: persons => {
        this.persons = persons;
        //this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });    
  }
  
  deletePerson(j:any){
    console.log('id : ', j);
    this.sub = this.personService.deletePersonsData(j).subscribe({
      next: res => {
        //this.persons = persons;
        //this.filteredProducts = this.products;
        console.log('Res : ',res);
      },
      error: err => this.errorMessage = err
    }); 

    this.sub = this.personService.getPersons().subscribe({
      next: persons => {
        this.persons = persons;
        //this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    }); 

  }

}
