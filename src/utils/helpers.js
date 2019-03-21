import { format } from 'date-fns';

const BIRTHDATE_FORMAT = 'MM/DD/YY'

export function capitalize(string = '') {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function formatDate(string = '') {
  if (typeof string !== 'string') return ''
  return format(string, BIRTHDATE_FORMAT)
}
