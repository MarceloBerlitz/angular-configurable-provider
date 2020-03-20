import { Injectable } from '@angular/core';
import { ConfigurableService } from './configurable.service';
import { SharedServiceEnum } from './enum/shared-service.enum';
import { SharedServiceConfigurations } from './model/shared-service-configurations';
import { providerFactory } from './factory/provider.factory';

@Injectable()
export class SharedService {

  private instances: ConfigurableService[] = [];

  constructor(
    private configurations: SharedServiceConfigurations
  ) { }

  public get(option: SharedServiceEnum): ConfigurableService {
    let service: ConfigurableService = this.instances.find(inst => inst.option == option);
    if (service) {
      return service
    }
    service = providerFactory(this.configurations.configs.find(config => config.option == option));
    this.instances.push(service);
    return service;
  }
}
