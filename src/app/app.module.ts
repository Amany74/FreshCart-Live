import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FeaturedProductsComponent } from './shared/featured-products/featured-products.component';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './pages/home/mainComponents/main-slider/main-slider.component';
import { SliderWrapperComponent } from './pages/home/mainComponents/slider-wrapper/slider-wrapper.component';
import { TrimPipe } from './core/pipes/trim.pipe';
import { SearchPipe } from './core/pipes/search.pipe';
import { CartComponent } from './pages/cart/cart.component';
import { FilterProductsPipe } from './core/pipes/filter-products.pipe';
import { CheckoutComponent } from './core/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ToastrModule } from 'ngx-toastr';
import { MainCategoriesComponent } from './pages/main-categories/main-categories.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BrandsComponent,
    CategoriesComponent,
    NotfoundComponent,
    SigninComponent,
    SignupComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    SliderWrapperComponent,
    TrimPipe,
    SearchPipe,
    CartComponent,
    FilterProductsPipe,
    CheckoutComponent,
    OrdersComponent,
    MainCategoriesComponent,
    CategoryDetailsComponent,
    WishlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
