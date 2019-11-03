import moment from 'moment';

export const parseDate = date => moment(date);

export const formatDate = date => moment(date).format('L');

export const formatTime = datetime => `${moment(datetime).format('HH:mm')}H`;

const moneyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
export const formatMoney = value => moneyFormatter.format(value);

export const normalizeEvent = event => {
  const parsedStartDate = parseDate(event.startDate);
  const parsedEndDate = parseDate(event.endDate);
  return {
    ...event,
    startDateFormatted: formatDate(parsedStartDate),
    endDateFormatted: formatDate(parsedEndDate),
    startTimeFormatted: formatTime(parsedStartDate),
    endTimeFormatted: formatTime(parsedEndDate),
    ticketPriceFormatted: formatMoney(event.ticketPrice),
  };
};

export const normalizeTicket = ticket => ({
  ...ticket,
  paidValueFormatted: formatMoney(ticket.paidValue),
});
