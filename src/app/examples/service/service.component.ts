import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [DataService]
})
export class ServiceComponent implements OnInit {
  users: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(response => {
      console.log(response);
      this.users = response;
    });
  }
}
