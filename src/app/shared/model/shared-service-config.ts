import { Config } from './config';
import { SharedServiceEnum } from '../enum/shared-service.enum';

export class SharedServiceConfig {
    public option: SharedServiceEnum;
    public config: Config
}