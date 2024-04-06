import { Component, inject, OnInit } from '@angular/core';
import { TestimonialService } from './testimonial.service';
import { Testimonial } from './testimonial.testimonial';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent implements OnInit {

  private TestimonialService = inject(TestimonialService);
  contentText: Testimonial[] = []

  ngOnInit(): void {
    this.contentText = this.TestimonialService.getContent();
  }

  starsArray: number[] = [1, 2, 3, 4, 5];
}
