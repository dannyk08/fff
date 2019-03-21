import { format } from 'date-fns';

const BIRTH_DATE_FORMAT = 'MM/DD/YY'

export function capitalize(string = '') {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function formatDate(string = '') {
  if (typeof string !== 'string') return ''
  return format(string, BIRTH_DATE_FORMAT)
}
