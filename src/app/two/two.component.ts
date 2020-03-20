import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { SharedServiceEnum } from '../shared/enum/shared-service.enum';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  public text: string;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.text = this.service.get(SharedServiceEnum.TWO).getText();
  }

}
