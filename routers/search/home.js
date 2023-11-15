import express from 'express';
import eta from '../../lib/connections/eta.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const html = await eta.renderAsync('/pages/home.eta');
  res.send(html);
});

export default router;