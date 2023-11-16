import getBraveResults from './fetch/brave.js';

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