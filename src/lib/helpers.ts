export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeGermany(): Date {
  // neues Objekt "Date" initialisieren
  const now = new Date();

  // UTC in CET konvertieren
  const offsetGermany = 2; // Central Eastern Time +2Std. offset
  now.setHours(now.getUTCHours() + offsetGermany);

  return now;
}

export function formatTimeGermany(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Berlin",
  };

  let formattedTime = new Intl.DateTimeFormat("de", options).format(date);

  formattedTime += " (CET)";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
