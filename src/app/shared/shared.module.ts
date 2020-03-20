import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { SharedServiceConfigurations } from './model/shared-service-configurations';
import { SharedServiceEnum } from './enum/shared-service.enum';

@NgModule({
  declarations: [],
      imports: [
        CommonModule
      ],
      providers: [
        { provide: SharedServiceConfigurations, useValue: {
          configs: [
            {
              option: SharedServiceEnum.ONE,
              config: { text: "one" }
            },
            {
              option: SharedServiceEnum.TWO,
              config: { text: "two" }
            }
          ]
        } },
        { provide: SharedService }
      ]
})
export class SharedModule {}
