import { format, formatDistanceToNowStrict } from "date-fns";
import locale from "date-fns/locale/en-US";

export const formatDate = (date) => {
  return format(date, "MMMM dd, yyyy");
};

export const formatDifference = (date) => {
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: {
      ...locale,
      formatDistance,
    },
  });
};

const formatDistanceLocale = {
  lessThanXSeconds: "{{count}}s",
  xSeconds: "{{count}}s",
  halfAMinute: "30s",
  lessThanXMinutes: "{{count}}m",
  xMinutes: "{{count}}m",
  aboutXHours: "{{count}}h",
  xHours: "{{count}}h",
  xDays: "{{count}}d",
  aboutXWeeks: "{{count}}w",
  xWeeks: "{{count}}w",
  aboutXMonths: "{{count}}m",
  xMonths: "{{count}}m",
  aboutXYears: "{{count}}y",
  xYears: "{{count}}y",
  overXYears: "{{count}}y",
  almostXYears: "{{count}}y",
};

function formatDistance(token, count, options) {
  options = options || {};

  const result = formatDistanceLocale[token].replace("{{count}}", count);

  if (options.addSuffix) {
    return result + " ago";
  }

  return result;
}
