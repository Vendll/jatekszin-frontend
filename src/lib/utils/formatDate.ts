/**
 * Formats an ISO date string to a human-readable date string according to the specified format options.
 * The function specifically formats dates to the 'Europe/Budapest' timezone and returns the result in Hungarian format.
 *
 * @param {string} isoDateString - The ISO 8601 date string (e.g., "2021-03-19T12:00:00Z") to format.
 * @returns {string} A formatted date string in the format: "year month day, hour:minute". The month is in Hungarian,
 *                   the time is adjusted to the 'Europe/Budapest' timezone, and the hour is in 24-hour format.
 *
 * @example
 * // Returns "2021. március 19., 13:00"
 * formatDate("2021-03-19T12:00:00Z");
 */
export function formatDate(isoDateString: string): string {
	const date = new Date(isoDateString);

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'Europe/Budapest'
	};

	const formattedDate = date.toLocaleDateString('hu-HU', options);
	return formattedDate;
}
