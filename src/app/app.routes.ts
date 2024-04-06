import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';import { ServicesComponent } from './components/services/services.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'home' },
    { path: 'about', component: AboutComponent, title: 'about' },
    { path: 'services', component: ServicesComponent, title: 'services' },
    { path: 'testimonial', component: TestimonialComponent, title: 'testimonial' },
    { path: 'contact', component: ContactComponent, title: 'contact' },
    { path: '**', component: NotFoundComponent, title: 'not-found' }
];
