Test Command 
`curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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`


To use:

1. Start ngrok `ngrok http 3000`
2. Run `node app.js`
3. Copy https:// address from ngrok to Slack Event Subscriptions `https://....ngrok.io/slack/events` and save
4. Chat in slack workspace using `@prototypebot`


To use with Docker Image:
1. Start ngrok `ngrok http 3000`
2. Run `make docker-prod`
3. Run `make run`
3. Copy https:// address from ngrok to Slack Event Subscriptions `https://....ngrok.io/slack/events` and save
4. Chat in slack workspace using `@prototypebot`

