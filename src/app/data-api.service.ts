import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  persons = [{ name: "david" }, { name: "John" }, { name: "Mark" }];


  constructor() { }

  allPeople() { 
    return this.persons;
  }
}
