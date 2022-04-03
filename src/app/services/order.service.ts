import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private sessionService: SessionService) { }
}
