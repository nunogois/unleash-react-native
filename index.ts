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
  UnleashClient,
  LocalStorageProvider,
  InMemoryStorageProvider
} from 'unleash-proxy-client'
import {
  FlagContext,
  FlagProvider,
  useFlag,
  useFlagsStatus,
  useVariant,
  useUnleashContext,
  useUnleashClient
} from '@unleash/proxy-client-react'

import { storageProvider as defaultStorageProvider } from './storageProvider'

export {
  FlagContext,
  FlagProvider,
  useFlag,
  useFlagsStatus,
  useVariant,
  useUnleashContext,
  useUnleashClient,
  defaultStorageProvider
}

export default FlagProvider
