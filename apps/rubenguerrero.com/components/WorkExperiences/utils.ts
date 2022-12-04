import dayjs from 'dayjs';
import pluralize from 'pluralize';

const renderDatePlural = (date: number, word: string) => {
  if (!date) return '';
  return pluralize(word, date, true);
};
export const renderDateAmount = (start: string, end: string | null, showPlusDate?: boolean) => {
  const startDate = dayjs(start);
  const endDate = dayjs(end || new Date());

  const year = endDate.diff(startDate, 'year');
  const months = endDate.diff(startDate, 'month');
  const realMonths = months % 12;

  if (showPlusDate) {
    return `+${renderDatePlural(year, 'year')}`;
  }

  return `${renderDatePlural(year, 'year')} ${renderDatePlural(realMonths, 'month')}`;
};
export const renderDate = (start: string, end: string | null) => {
  const startDate = dayjs(start).format('MMM YYYY');
  const endDate = end ? dayjs(end).format('MMM YYYY') : 'Present';
  return `${startDate} - ${endDate}`;
};
