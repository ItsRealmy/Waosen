import express from 'express';
import eta from '../../lib/connections/eta.js';
import getTextResults from '../../lib/results/text.js';

const router = express.Router();

router.get('/', async (req, res) => {
  let response;
  try {
    response = await getTextResults(req.query.q, req.query.p);
  } catch (err) {
    // TODO: Handle errors
    return res.send('');
  }
  
  const html = await eta.renderAsync('/pages/results.eta', { data: response });
  res.send(html);
});

export default router;