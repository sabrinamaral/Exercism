// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = Date.now()) {
  const daysFromNow = now + days * 24 * 60 * 60 * 1000;
  return new Date(daysFromNow);
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);

  if ("year" in options) {
    date.setFullYear(options.year);
  }
  if ("month" in options && (options.month > 0 || options.month <= 12)) {
    date.setMonth(options.month);
  }
  if ("date" in options && (options.date > 0 || options.date <= 31)) {
    date.setDate(options.date);
  }
  if (("hour" in options) & (options.hour > 0 || options.hour <= 60)) {
    date.setHours(options.hour);
  }
  if ("minute" in options && (options.minute > 0 || options.minute <= 60)) {
    date.setMinutes(options.minute);
  }
  return getAppointmentDetails(date.toISOString());
}
/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const diff = new Date(timestampA) - new Date(timestampB);
  return Math.round(Math.abs(diff / 1000));
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const appointment = new Date(appointmentTimestamp);
  const current = new Date(currentTimestamp);

  if (appointment > current) {
    return true;
  }
  return false;
}
