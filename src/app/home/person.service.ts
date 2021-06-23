import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IPerson } from './person';
import {catchError, tap} from 'rxjs/operators';

@Injectable ({
    providedIn: 'root'
})

export class PersonService{
    //private url = 'https://tekdi-challenges.appspot.com/api/People';
    private url = 'http://localhost:5555/persons';
    constructor(private http: HttpClient) { }

    getPersons() : Observable<IPerson[]>{
        return this.http.get<IPerson[]>(this.url).pipe(
            tap(data => console.log("data", JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    deletePersonsData(id:any){
      return this.http.delete('http://localhost:5555/persons/'+id).pipe(
        tap(res => console.log('Res : ', res)),
        catchError(this.handleError)
      );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}

