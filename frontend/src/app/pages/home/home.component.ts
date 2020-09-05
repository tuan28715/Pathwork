import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public auth: AuthService,public afAuth:AngularFireAuth,private router: Router
  ) { }

  ngOnInit(): void {
  }
  gotoSth(name: string) {
    this.router.navigate([`${name}`]);
  }

}
