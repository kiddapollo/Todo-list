import { Component, Input } from '@angular/core';
import { Completed } from '../models/completed';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {

  completedList!: Completed[];
  constructor() {}

  ngOnInit(): void {
    this.completedList = [
      
    ]
  }
  editTask () {
    
  }

   deleteTask(): void{
  }
  
}
