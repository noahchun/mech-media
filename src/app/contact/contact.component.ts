import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}
  div1Visible = false;
  div2Visible = false;

  ngOnInit(): void {
    console.log("Contact was clicked");
    setTimeout(() => {
      this.div1Visible = true;
    }, 500);
    setTimeout(() => {
      this.div2Visible = true;
    }, 2200);
  }

}

