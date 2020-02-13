# Nest & Angular Universal Starter

A minimal [**Nest**](https://github.com/nestjs/nest) and Angular starter for Universal using the
[Angular CLI](https://github.com/angular/angular-cli). If you're looking for the Angular Universal repo go to
[angular/universal](https://github.com/angular/universal).

---

<p align="center">
  <a href="https://trilon.io" target="_blank">
        <img width="500" height="auto" src="https://trilon.io/trilon-logo-clear.png" alt="Trilon.io - Angular Universal, NestJS, JavaScript Application Consulting Development and Training">
  </a>
</p>


<h3 align="center"> Made with :heart: by <a href="https://trilon.io">Trilon.io</a></h3>

---

## Getting Started

This demo is built following the [Angular-CLI Wiki guide](https://github.com/angular/angular-cli/wiki/stories-universal-rendering).

### Installation

- `npm i`

### Development (Client-side only rendering)

- `npm start` which will run `ng serve`.

### Development (Server-side rendering)

- `npm run dev:ssr`.

### Production

\*`npm run build:ssr && npm run serve:ssr`

- Compiles your application and spins up a Nest server to serve your Universal application on `http://localhost:4000`.

\*`npm run prerender`

- Compiles your application and prerenders your applications files

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
