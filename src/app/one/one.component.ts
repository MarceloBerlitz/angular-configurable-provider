import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { SharedServiceEnum } from '../shared/enum/shared-service.enum';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  public text: string;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.text = this.service.get(SharedServiceEnum.ONE).getText();
  }

}
