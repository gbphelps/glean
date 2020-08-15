import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export default function useCategories(): string[] {
  const { search } = useLocation();
  const { categories: filter } = queryString.parse(search, { arrayFormat: 'comma' });
  const categories: string[] = [];
  return (filter ? categories.concat(filter) : []).map((el) => el.toLowerCase());
}
