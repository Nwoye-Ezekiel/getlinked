

import { useQuery } from 'react-query'
import { getCategories } from 'apis/registration'

export function useCategories() {
  const query = useQuery('categories', () => getCategories())
  return query
}