import { AfterContentInit, Component, inject, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { List } from './list';
import { Router, RouterLink, RouterModule, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, AfterContentInit {
  private ListService = inject(ListService);
  private router = inject(Router);
  private ActivatedRoute = inject(ActivatedRoute);

  serviceContent: List[] = [];
  isActivated: boolean = false;

  ngOnInit(): void {
    this.serviceContent = this.ListService.getList();
  }

  ngAfterContentInit(): void {
    this.ActivatedRoute.params.subscribe((params: Params) => {
      console.log(params['id']);
    })
  }

  helpMe() {
    this.router.navigate(['/contact'])
  }
}
