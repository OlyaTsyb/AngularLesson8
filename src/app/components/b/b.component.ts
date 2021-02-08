import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  someValue: number;
  b: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getCurrentValue().subscribe(value => this.someValue = value);
    this.b = 'Text from BComponent';
  }

  increment(): void {
    this.dataService.setNewState();
  }
}
