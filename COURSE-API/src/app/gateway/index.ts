import mercadoPago from 'mercadopago';

export default mercadoPago.configure({
  sandbox: true,
  access_token: process.env.MP_ACCESS_TOKEN || '',
});