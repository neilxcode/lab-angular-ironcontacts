import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {

  @Input() oneSingleContact: any
  @Output() contactBeingDeleted = new EventEmitter<string>();

  deleteContact(theContact){
    this.contactBeingDeleted.emit(theContact);
  }


  constructor() {
   }

  ngOnInit() {
  }

}
