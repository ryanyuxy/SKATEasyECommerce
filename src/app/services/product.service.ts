import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Tag } from '../models/tag';
import { Category } from '../models/category';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private sessionService: SessionService) { }
}
