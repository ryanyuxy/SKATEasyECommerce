import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Order } from '../models/order';
import { CustomisationRequest } from '../models/customisation-request';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[];

  constructor() {
    this.customers = new Array();
   }

   customerLogin(email: string | undefined, password: string | undefined): Customer | null {
    for (let customer of this.customers) 
		{
			if(customer.email == email && customer.password == password)
			{
				return customer;
			}
		}
     return null;
   }

}
