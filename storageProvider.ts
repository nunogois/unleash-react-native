import AsyncStorage from '@react-native-async-storage/async-storage'

export const storageProvider = (appName = 'unleash:repository') => ({
  // biome-ignore lint/suspicious/noExplicitAny: any is used to match the IStorageProvider interface
  save: async (name: string, data: any) => {
    try {
      const repo = JSON.stringify(data)
      const key = `${appName}:${name}`
      await AsyncStorage.setItem(key, repo)
    } catch (e) {
      console.error(e)
    }
  },
  get: async (name: string) => {
    try {
      const key = `${appName}:${name}`
      const data = await AsyncStorage.getItem(key)
      return data ? JSON.parse(data) : undefined
    } catch (e) {
      console.error(e)
    }
  }
})
