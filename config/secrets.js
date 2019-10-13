require('dotenv').config();

module.exports = {
  id: process.env.DOOR_ACCESS_ID,
  token: process.env.DOOR_ACCESS_TOKEN,
  ipAddress: process.env.IP_ADDRESS
}
