const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');

const { port, slackSigningSecret, slackToken } = require('./config');

const slackEvents = createEventAdapter(slackSigningSecret);
const slackClient = new WebClient(slackToken);

slackEvents.on('app_mention', (event) => {
    console.log('Got message from user' + event.user + ': ' + event.text);
    
    (async () => {
        try {
            await slackClient.chat.postMessage({ channel: event.channel, thread_ts: event.ts, text: `Hello <@${event.user}>! :heavy_check_mark:` })

        } catch (error) {
            console.log(error.data)
        }
    })();
});

slackEvents.on('error', console.error);

slackEvents.start(port).then(() => {
    console.log(`Server started on port ${port}`)
})