import { Injectable } from '@angular/core';

@Injectable()
export class StudentsDBService {

  constructor() { }


  getData() {
    return [
      {id: "1", name: "Asaad1", email: "Asaad1@mum.edu"},
      {id: "2", name: "Asaad2", email: "Asaad2@mum.edu"},
      {id: "3", name: "Asaad3", email: "Asaad3@mum.edu"},
      {id: "4", name: "Asaad4", email: "Asaad4@mum.edu"},
    ];

  }



}
