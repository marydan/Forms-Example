import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MyroutingService {

  loca : Location;

  constructor(private routeserve : Router,locobj : Location) {
     this.loca = locobj; 
   }

   goBack()
   {
     this.loca.back();
   }
 openLogin()
 {
   this.routeserve.navigate(['login']);
 }
 openRegister()
 {
   this.routeserve.navigate(['register']);
 }
}
