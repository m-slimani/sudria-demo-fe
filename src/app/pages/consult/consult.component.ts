import { Component, OnInit } from '@angular/core';
import { Ressource } from './Ressource';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.sass']
})
export class ConsultComponent implements OnInit {

  ressources: Array<Ressource> = [
    {id: 1, name: 'Cat', age: 10, category: 'grey'},
    {id: 2, name: 'Dog', age: 100, category: 'white'},
    {id: 3, name: 'Anything', age: 1000, category: 'red'},
 ];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
     this.apiService.getRessources().subscribe((res) => {
        console.log(res);
        this.ressources = res;
      });
  }
}
