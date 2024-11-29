import 'react-native-get-random-values'

export type {
  IConfig,
  IContext,
  IMutableContext,
  IVariant,
  IToggle,
  IStorageProvider
} from 'unleash-proxy-client'
export {
  LocalStorageProvider,
  InMemoryStorageProvider
} from 'unleash-proxy-client'
export {
  FlagContext,
  useFlag,
  useFlagsStatus,
  useVariant,
  useUnleashContext,
  useUnleashClient
} from '@unleash/proxy-client-react'

export { AsyncStorageProvider as defaultStorageProvider } from './asyncStorageProvider'
export { UnleashClient } from './unleashClient'
import { FlagProvider } from './FlagProvider'

export { FlagProvider }

export default FlagProvider
