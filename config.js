const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  slackSigningSecret: process.env.SLACK_SIGNING_SECRET,
  slackToken: process.env.SLACK_TOKEN,
  port: process.env.SLACK_PORT || 3000
};