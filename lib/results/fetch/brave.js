import fetch from 'node-fetch';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

/**
 * Fetches (text) search results from Brave's API.
 * @param {string} query The query to search with.
 * @param {number} pagination The page number (starts at 0).
 * @returns An object containing data from the API's response.
 */
export default async function getBraveResults(query, pagination) {
  let json;

  if (query === 'microsoft' && process.env.NODE_ENV === 'development') {
    const raw = fs.readFileSync(path.join(__dirname, '../../../samples/brave/example.json'), 'utf-8');
    json = JSON.parse(raw);
  } else {
    const resp = await fetch(`https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=9&offset=${9 * pagination}`, {
      headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'X-Subscription-Token': process.env.BRAVE_API_KEY,
      },
    });
    json = await resp.json();
  }

  if (json.type === 'ErrorResponse') throw new Error(json.error.code);

  const results = [];
  if (json.web) for (const item of json.web.results) {
    results.push({ url: item.url, title: item.title, description: item.description });
  }

  return { results };
}