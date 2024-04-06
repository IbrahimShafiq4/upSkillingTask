import { Injectable } from '@angular/core';
import { Testimonial } from './testimonial.testimonial';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private testimonialContent: Testimonial[] = [
    {
      image: './assets/profile/profile.png',
      userName: 'Courtney Henry',
      userText: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book
      `
    },
    {
      image: './assets/profile/profile.png',
      userName: 'Courtney Henry',
      userText: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book
      `
    },
    {
      image: './assets/profile/profile.png',
      userName: 'Courtney Henry',
      userText: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book
      `
    },
    {
      image: './assets/profile/profile.png',
      userName: 'Courtney Henry',
      userText: `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book
      `
    },
  ];

  getContent(): Testimonial[] {
    return this.testimonialContent.slice();
  }
}