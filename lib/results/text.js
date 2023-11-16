import getBraveResults from './fetch/brave.js';

/**
 * Fetches text search results, and formats them for use in Eta templates.
 * @param {string} query The query to search with.
 * @param {number} pagination The page number (starts at 0).
 * @returns An object containing data for the results Eta template.
 */
export default async function getTextResults(query, pagination) {
  if (!query || typeof query !== 'string') throw new Error('invalid query');
  if (query.length > 256) throw new Error('invalid query');

  let pageNum = pagination || 0;
  if (isNaN(parseInt(pageNum))) pageNum = 0;
  pageNum = parseInt(pageNum);
  if (pageNum < 0) pageNum = 0;

  const response = await getBraveResults(query, pageNum);

  return { query, pagination: pageNum, response };
}