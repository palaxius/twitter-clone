import formatDistance from 'date-fns/formatDistance'

export const formatDate = (date) => {
  return formatDistance(
    date,
    new Date()
  )
}