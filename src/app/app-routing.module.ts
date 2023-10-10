import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { authGuard } from './core/guards/auth.guard';
import { authReverseGuard } from './core/guards/auth-reverse.guard';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './core/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[authGuard], component:HomeComponent},
  {path:'about',canActivate:[authGuard], component:AboutComponent},
  {path:'categories',canActivate:[authGuard], component:CategoriesComponent},
  {path:'productDetails/:id',canActivate:[authGuard], component:ProductDetailsComponent},
  {path:'register',canActivate:[authReverseGuard], component:SignupComponent},
  {path:'login', canActivate:[authReverseGuard],component:SigninComponent},
  {path:'checkout/:cartId', canActivate:[authGuard],component:CheckoutComponent},
  { path: '/cart',canActivate:[authGuard], component:CartComponent} ,
  { path: '/wishlist',canActivate:[authGuard], component:WishlistComponent} ,
  { path: 'allorders',canActivate:[authGuard], component:OrdersComponent} ,
  { path: 'categoryDetails/:id',canActivate:[authGuard], component:CategoryDetailsComponent} ,

  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
