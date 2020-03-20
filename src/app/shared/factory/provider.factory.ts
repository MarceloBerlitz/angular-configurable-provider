import { ConfigurableService } from '../configurable.service';
import { SharedServiceConfig } from '../model/shared-service-config';

export const providerFactory = (config: SharedServiceConfig) => new ConfigurableService(config); 