import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }



  saveContact() {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');



    this.http.post('http://localhost:8080/contacts', this.contact, {headers:headers})
      .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/contact-detail', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

}
