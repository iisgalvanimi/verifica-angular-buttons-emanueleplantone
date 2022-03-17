import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-storia',
  templateUrl: './storia.component.html',
  styleUrls: ['./storia.component.css']
})
export class StoriaComponent implements OnInit {
  @Input() ultimo:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
