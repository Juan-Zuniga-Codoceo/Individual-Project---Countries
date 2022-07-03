const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./countries.routes.js');
const activitiesRouter = require('./activities.routes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRouter);
router.use("/activity", activitiesRouter);

module.exports = router;
