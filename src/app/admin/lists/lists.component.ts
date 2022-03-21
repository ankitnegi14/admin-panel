import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  email: any;
  dob: any;
  gender: string;
  mobile: number;
}




@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})

export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  // data: any[] = [
  //   { id: 1, name: 'ankit', email: 'anki@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '1234567890' },
  //   { id: 2, name: 'jai', email: 'jai@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '9876543210' },
  //   { id: 3, name: 'archita', email: 'archita@gmail.com', dob: '10-09-1999', gender: 'female', mobile: '1234561234' },
  //   { id: 4, name: 'manas', email: 'manas@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '1232123212' },
  //   { id: 5, name: 'lalita', email: 'lalita@gmail.com', dob: '10-09-1999', gender: 'female', mobile: '1212121212' },
  //   { id: 6, name: 'nitin', email: 'nitin@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '9696969696' },
  //   { id: 7, name: 'sahil', email: 'sahil@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '9878987898' },
  //   { id: 8, name: 'tanus', email: 'tanus@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '7896541258' },
  //   { id: 9, name: 'karanveer', email: 'karanveer@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '7410025896' },
  //   { id: 10, name: 'diksha', email: 'diksha@gmail.com', dob: '10-09-1999', gender: 'female', mobile: '0321012012' },
  //   { id: 11, name: 'himika', email: 'himika@gmail.com', dob: '10-09-1999', gender: 'female', mobile: '1245789865' },
  // ];

  ELEMENT_DATA = [
    { id: 1, name: 'ankit', email: 'anki@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '1234567890' },
    { id: 2, name: 'jai', email: 'jai@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '9876543210' },
    { id: 3, name: 'archita', email: 'archita@gmail.com', dob: '10-09-1999', gender: 'female', mobile: '1234561234' },
    { id: 4, name: 'manas', email: 'manas@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '1232123212' },
    { id: 5, name: 'lalita', email: 'lalita@gmail.com', dob: '10-09-1999', gender: 'female', mobile: '1212121212' },
    { id: 6, name: 'nitin', email: 'nitin@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '9696969696' },
    { id: 7, name: 'sahil', email: 'sahil@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '9878987898' },
    { id: 8, name: 'tanus', email: 'tanus@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '7896541258' },
    { id: 9, name: 'karanveer', email: 'karanveer@gmail.com', dob: '10-09-1999', gender: 'male', mobile: '7410025896' },
    { id: 10, name: 'diksha', email: 'diksha@gmail.com', dob: '10-09-1999', gender: 'female', mobile: '0321012012' },
    { id: 11, name: 'himika', email: 'himika@gmail.com', dob: '10-09-1999', gender: 'female', mobile: '1245789865' },

  ];


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

}
