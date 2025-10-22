import 'server-only'

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then(module => module.default),
  sk: () => import('../../dictionaries/sk.json').then(module => module.default)
}

export const getDictionary = async (locale: 'en' | 'sk') =>
  dictionaries[locale]()
