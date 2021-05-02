const TWILIO_ACCOUNT_SID: string = process.env['TWILIO_ACCOUNT_SID']!;
const TWILIO_AUTH_TOKEN: string = process.env['TWILIO_AUTH_TOKEN']!;

const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export default twilioClient;