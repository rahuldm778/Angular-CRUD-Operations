import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IPerson } from '../home/person';
import { Subscription } from 'rxjs';
import { PersonService } from '../home/person.service';
@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {
  // data1: IPerson = {
  //   id:1,
  //   name:"Rahul",
  //   email:"ra@gmail.com",
  //   country:"IN",
  //   dob:"10-10-1998",
  //   avtar:"www.gmail.com"
  // }
  data1:any;
  personObj:any;
  iD:any;
  persons: IPerson[] = [];
  sub!: Subscription;
  errorMessage: any;
  i:number=0;
 
  constructor(private personService: PersonService, private route : ActivatedRoute, private http:HttpClient, private router:Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.iD=+params['id'];
    });

    this.sub = this.personService.getPersons().subscribe({
      next: persons => {
        this.persons = persons;
        for(this.i=0 ; this.i < this.persons.length; this.i += 1){
          if(this.persons[this.i].id === this.iD){
            console.log("Update data is: ",this.persons[this.i] );
            this.data1 = this.persons[this.i];
            break;
          }
        }
        //this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });    
  }
  updatePerson(data:any){
    console.log("data: ", data);
    // this.personObj= {
    //   "name":data.name,
    //   "email":data.email,
    //   "dob":data.dob,
    //   "country":data.country,
    //   "avtar":data.avtar
    // }

    this.http.put('http://localhost:5555/persons/'+this.iD, data).subscribe((result)=>{
      console.log('Results', result);
      this.router.navigate(['/']);

    });  
  }

}
