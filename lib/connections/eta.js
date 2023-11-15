import { Eta } from 'eta';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const eta = new Eta({ views: path.join(__dirname, '../../templates') });
export default eta;