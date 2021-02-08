import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  someValue: number;
  a: string;
  img: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getCurrentValue().subscribe(value => this.someValue = value);
    this.a = 'Text from AComponent';
    this.img = 'https://bipbap.ru/wp-content/uploads/2019/05/skvishi-68-800x800-640x640.jpg';
  }

  increment(): void {
    this.dataService.setNewState();
  }
}
