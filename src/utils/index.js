import moment from 'moment';
import 'moment/locale/pt-br';
import numbro from 'numbro';
import numbroLang from 'numbro/languages/pt-BR';

numbro.registerLanguage(numbroLang, true);

moment.locale('pt-br');

export const parseDate = date => moment(date);

export const formatDate = date => moment(date).format('L');

export const formatTime = datetime => `${moment(datetime).format('HH:mm')}H`;

export const formatMoney = value => numbro(value).formatCurrency();

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
