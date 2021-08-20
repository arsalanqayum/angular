import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PageComponent } from '../../shared/page/page.component';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent extends PageComponent implements OnInit, AfterViewInit {

  constructor(_scrollService: ScrollService) {
    super(_scrollService);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

}
