import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linktext',
  templateUrl: './linktext.component.html',
  styleUrls: ['./linktext.component.css']
})
export class LinktextComponent implements OnInit {

  @Input() titletext: string
  @Input() linktext: string
  constructor() { }

  ngOnInit() {
  }

}