import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { IPerson } from '../home/person';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  // data : IPerson = {}
  addedStr: string ="Person is added go back to table";
  isAdded : boolean = false;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    this.http.post('http://localhost:5555/persons', data).subscribe((result)=>{
      console.log('Results', result);
      this.isAdded=true;
    })
    console.log(data);
  }


}
