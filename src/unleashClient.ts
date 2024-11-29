import {
  UnleashClient as BaseUnleashClient,
  type IConfig
} from 'unleash-proxy-client'
import { AsyncStorageProvider } from './asyncStorageProvider'

export class UnleashClient extends BaseUnleashClient {
  constructor(config: IConfig) {
    const reactNativeConfig = {
      ...config,
      storageProvider:
        config.storageProvider ?? new AsyncStorageProvider(config.appName)
    }

    super(reactNativeConfig)
  }
}
