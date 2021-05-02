const CoinbasePro = require('coinbase-pro');

const COINBASE_PRO_API_SECRET: string = process.env['COINBASE_PRO_API_SECRET']!;
const COINBASE_PRO_API_KEY: string = process.env['COINBASE_PRO_API_KEY']!;
const COINBASE_PRO_API_PASSPHRASE:string = process.env['COINBASE_PRO_API_PASSPHRASE']!;

const coinbaseClient = new CoinbasePro.AuthenticatedClient(COINBASE_PRO_API_KEY, COINBASE_PRO_API_SECRET, COINBASE_PRO_API_PASSPHRASE, 'https://api.pro.coinbase.com');

export default coinbaseClient;