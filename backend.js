const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configura tu access token de Mercado Pago
mercadopago.configure({
  access_token: 'TU_ACCESS_TOKEN' // <-- Pega aquí tu Access Token real
});

// Endpoint para crear preferencia de pago
app.post('/crear-preferencia', async (req, res) => {
  const preference = {
    items: [
      {
        title: 'Donación a Fundación Cruxes de Luz',
        unit_price: 1000,
        quantity: 1,
      }
    ],
    back_urls: {
      success: 'https://tusitio.com/gracias',
      failure: 'https://tusitio.com/error',
      pending: 'https://tusitio.com/pendiente'
    },
    auto_return: 'approved',
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({ init_point: response.body.init_point });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor backend escuchando en http://localhost:3000');
});