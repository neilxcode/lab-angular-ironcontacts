import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<any> = contactList;
  newContact: any = {};
  

  addContact(){
    console.log("Add contact has been called");
    // add contact to contacts list
    const addContact = {name: this.newContact.name, email: this.newContact.email, phoneNumber: this.newContact.phoneNumber}
    this.contacts.unshift(addContact);
    // clear inputs
    this.newContact.name = "";
    this.newContact.email = "";
    this.newContact.phoneNumber = "";
    this.newContact.image = "";
  }

  deleteTheContact(entireContact){
    const index = this.contacts.indexOf(entireContact);
    this.contacts.splice(index, 1);
  }
  

  constructor() { }

  ngOnInit() {

  }

}
