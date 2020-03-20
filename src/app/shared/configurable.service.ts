import { SharedServiceConfig } from './model/shared-service-config';
import { SharedServiceEnum } from './enum/shared-service.enum';

export class ConfigurableService {

  public readonly option: SharedServiceEnum;

  constructor(private serviceConfig: SharedServiceConfig) { 
    this.option = serviceConfig.option;
  }

  public getText() {
    return `text: ${this.serviceConfig.config.text}`;
  }
}
