import express from 'express';

const router = express.Router();

router.use('/', await (await import('./home.js')).default);
router.use('/search', await (await import('./results.js')).default);

export default router;