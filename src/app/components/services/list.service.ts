import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private list: List[] = [
    {
      img: './assets/services/img1 (1).png',
      title: 'Lorem Ipsum',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`
    },
    {
      img: './assets/services/img1 (2).png',
      title: 'Lorem Ipsum',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`
    },
    {
      img: './assets/services/img1 (3).jpeg',
      title: 'Lorem Ipsum',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`
    }
  ]

  getList(): List[] {
    return this.list.slice();
  }
}
