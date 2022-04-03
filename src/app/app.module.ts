import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewMyOrdersComponent } from './view-my-orders/view-my-orders.component';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { CustomisationRequestComponent } from './customisation-request/customisation-request.component';
import { ViewAllArtistsComponent } from './view-all-artists/view-all-artists.component';
import { ViewArtistDetailsComponent } from './view-artist-details/view-artist-details.component';
import { RegisterNewCustomerComponent } from './register-new-customer/register-new-customer.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ViewCartComponent,
    ViewProfileComponent,
    ViewMyOrdersComponent,
    ViewOrderDetailsComponent,
    ViewProductDetailsComponent,
    CustomisationRequestComponent,
    ViewAllArtistsComponent,
    ViewArtistDetailsComponent,
    RegisterNewCustomerComponent,
    HeaderComponent,
    MainMenuComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
