import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { SessionService } from '../services/session.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string | undefined
  password: string | undefined;
  loginError: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public sessionService: SessionService,
    private customerService: CustomerService) {
      this.loginError = false;
     }

  ngOnInit(): void {
  }

  customerLogin(): void
  {
    let customer: Customer | null = this.customerService.customerLogin(this.email, this.password);

    if (customer != null)
    {
      this.sessionService.setIsLogin(true);
      this.sessionService.setCurrentCustomer(customer);
      this.loginError = false;

      this.router.navigate(["/index"]);
    }
    else
    {
      this.loginError = true;
    }
  }



  customerLogout(): void
  {
    this.sessionService.setIsLogin(false);
    this.sessionService.setCurrentCustomer(null);

    this.router.navigate(["/index"]);
  }

}
