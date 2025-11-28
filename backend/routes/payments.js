const express = require('express');
const router = express.Router();

router.post('/paypal/create', (req, res) => {
    console.log('PayPal create order request', req.body);
    res.json({ id: 'PAYPAL_ORDER_ID_MOCK', status: 'CREATED' });
});

router.post('/mercadopago/create', (req, res) => {
    console.log('Mercado Pago create preference request', req.body);
    res.json({ id: 'MP_PREFERENCE_ID_MOCK', init_point: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=...' });
});

router.post('/stripe/create-intent', (req, res) => {
    console.log('Stripe create intent request', req.body);
    res.json({ clientSecret: 'STRIPE_CLIENT_SECRET_MOCK' });
});

module.exports = router;
