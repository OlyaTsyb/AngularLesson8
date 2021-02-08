import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';
import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngularLesson8';
  someValue: number;

  @ViewChild(AComponent)
  a: AComponent;
  @ViewChild(BComponent)
  b: BComponent;
  @ViewChild('change1')
  change1: ElementRef;
  @ViewChild('image')
  image: ElementRef;
  @ViewChild('change2')
  change2: ElementRef;
  @ViewChild('image2')
  image2: ElementRef;

  constructor(private dataService: DataService) {
    this.dataService.getCurrentValue().subscribe(value => this.someValue = value);
  }

  increment(): void {
    this.dataService.setNewState();
  }

  ngAfterViewInit(): void {
    this.change1.nativeElement.innerText = this.a.a;
    this.image.nativeElement.src = 'https://find-way.com.ua/components/com_jshopping/files/img_products/mig%D1%96iske_radonove_ozero_pokinutii_gran%D1%96tnii_kar_%D1%94r_rad%D1%96oaktivne_ozero_mig%D1%96ya_48_0212474_30_9673691_mikola%D1%97vska_oblast_1743.jpg';
    this.change2.nativeElement.innerText = this.b.b;
    this.image2.nativeElement.src = this.a.img;
    console.log(this.a.a);
    console.log(this.image.nativeElement.src);
  }
}
