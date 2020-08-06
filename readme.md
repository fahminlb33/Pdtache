# Pdtache📄

**🚧I need help to add unit test to this app🚧**

Pdtache is a PDF creator using `puppeteer` and `mustache` to render HTML into PDF.
This app works as web app and also exposes several APIs to integrate to your apps.
Comes with built-in Minio integration and it's 🐳Docker ready.

## 🧐 What you'll find in this repo

A simple and straight forward SPA page where you can enter HTML template path or
HTML body and the data to render. The data must be in JSON format.

- SPA to enter template and data.
- Console to browse generated PDFs.
- Basic PDF creation and management.
- Minio integrated.
- Docker ready.
- Logging.

## 🏗 The architecture

For the frontend, I use basic SPA using Vue.js, nothing fancy😄
For the backend, I use 3-layer onion architecture.

## 👻 What I've used in this repo

- VueJS
- Bulma CSS
- FontAwesome 5
- TypeScript
- Puppeteer
- Mustache
- Express
- Winston
- Jest

## 🏃‍ Running locally

You'll need Docker to run this app. Install docker, then:

```
docker-compose up
```

to shut down the containers, run:

```
docker-compose down
```
