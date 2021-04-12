# Build docker image
# User the .env file if exists (which it should)
ifneq (,$(wildcard ./.env))
    include .env
    export
    ENV_FILE_PARAM = --env-file .env
endif

docker-dev:
	docker build -t protoslackbot:v0.1.0-dev -f build/Dockerfile.dev .

# Build docker image, but smaller
docker-prod:
	docker build -t protoslackbot:v0.1.0-prod -f build/Dockerfile.prod .

# run the docker image (after build from docker-prod) uses .env variables
run:
	docker run -d -p $(LOCAL_PORT):$(SLACK_PORT) -e $(SLACK_SIGNING_SECRET) -e $(SLACK_TOKEN) protoslackbot:v0.1.0-prod