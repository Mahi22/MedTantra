# Full-stack GraphQL + React v16 streaming API

Full-stack React + GraphQL, done properly.

## Features

### Stack

- [React v16](https://facebook.github.io/react/) for UI
- [Apollo Server](http://dev.apollodata.com/tools/) for enabling the built-in GraphQL server
- [Apollo Client (React)](http://dev.apollodata.com/react/) for connecting to GraphQL
- [React Router 4](https://github.com/ReactTraining/react-router/tree/v4) for declarative browser + server routes
- [Redux](http://redux.js.org/) for flux/store state management

### GraphQL

- Built-in GraphQL server via - just pass in your schema, and enable `/graphql` with a single line of code
- [GraphiQL](https://github.com/graphql/graphiql) query browser enabled by default
- Isomorphic GraphQL client - await data via SSR before rendering HTML; query asynchronously in the browser
- Avoid network overhead with local GraphQL querying via [apollo-local-query](https://github.com/af/apollo-local-query)
- Write `.gql` GraphQL query files, use fragments, or type queries inline.

### Server-side rendering

- Built-in [Koa 2](http://koajs.com/) web server, with async/await routing
- React v16 with streaming API - time-to-first-byte as low as 4-5ms!
- Full route-aware [server-side rendering (SSR)](https://reactql.org/docs/ssr) of initial HTML
- Universal building - both browser + Node.js web server compile down to static files
- Per-request Redux stores. Store state is dehydrated via SSR, and rehydrated automatically on the client
- HTTP header hardening with [Helmet for Koa](https://github.com/venables/koa-helmet)
- Declarative/dynamic `<head>` section, using [react-helmet](https://github.com/nfl/react-helmet)
- Full page React via built-in `<Html>` component - every byte of your HTML is React!

### Real-time

- [Hot code reloading](http://gaearon.github.io/react-hot-loader/); zero refresh, real-time updates in development
- React + Redux state preservation on hot reloading, to avoid interrupting your dev flow
- [Development web server](https://reactql.org/docs/setup#development) that automatically rebuilds and restarts on code changes, for on-the-fly SSR testing with full source maps

### Code optimisation

- [Webpack v3](https://webpack.js.org/), with [tree shaking](https://webpack.js.org/guides/tree-shaking/) -- dead code paths are automatically eliminated
- Separate local + vendor bundles, for better browser caching/faster builds
- Dynamic polyfills, courtesy of [babel-preset-env](https://github.com/babel/babel-preset-env)
- Aggressive code minification with [Uglify](https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)
- [GIF/JPEG/PNG/SVG crunching](https://github.com/tcoopman/image-webpack-loader) for images in production
- CSS code is combined, minified and optimised automatically - even if you use SASS, LESS and CSS together!

### Styles

- [PostCSS v6](http://postcss.org/) with [next-gen CSS](http://cssnext.io/) and inline [@imports](https://github.com/postcss/postcss-import)
- [SASS](http://sass-lang.com) and [LESS](http://lesscss.org/) support (also parsed through PostCSS)
- Automatic vendor prefixing - write modern CSS, and let the compiler take care of browser compatibility
- Mix and match SASS, LESS and regular CSS - without conflicts!
- CSS modules - your classes are hashed automatically, to avoid namespace conflicts
- Compatible with Foundation, Bootstrap, Material and more. Simply configure via a `.global.*` import to preserve class names

### Highly configurable

- Userland configuration.  No need to edit kit code; simply use the built-in `Config` singleton
- Add a GraphQL server with one line of code
- Add GET|POST|PUT|PATCH|DELETE routes - auto-injected with Koa context and the per-request Redux store
- Add a custom 404 handler
- Enable/disable POST body parsing, along with custom options

### Production-ready

- [Production bundling](https://reactql.org/docs/bundling/production), that generates optimised server and client code
- [Static bundling mode](https://reactql.org/docs/bundling/static) for hosting your full app on any static host -- Github pages, S3, Netlify, etc
- [Static compression](https://webpack.js.org/plugins/compression-webpack-plugin/) using the [Zopfli Gzip](https://en.wikipedia.org/wiki/Zopfli) and [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html) algorithms for the serving of static assets as pre-compressed `.gz` and `.br` files (default `vendor.js.bz` goes from 380kb -> 89kb!)
- Easily extendable [webpack-config](https://fitbit.github.io/webpack-config/) files, for modular Webpack tweaks
- [Docker](https://www.docker.com/) support, with an optimised `Dockerfile` out-the-box

### Developer support

- [ESLint v3](http://eslint.org/)ing based on a tweaked [Airbnb style guide](https://github.com/airbnb/javascript)
- [Jest](https://facebook.github.io/jest/) test runner
- [Node Inspector](https://nodejs.org/en/docs/inspector/) support for SSR in dev mode - remotely debug the server, set breakpoints, inspect the stack from within Chrome
- Tons of code commentary to fill you in on what's happening under the hood
- Extensive, up-to-date [online documentation](https://reactql.org/docs/)
- [Examples repository](https://github.com/reactql/examples), with real-world use cases

## Usage

`yarn install` or `npm install` then run `npm start` or `yarns start` in the project root, and away you go!

## Docker

A [Dockerfile](https://github.com/reactql/kit/blob/master/Dockerfile) is included, that will build, optimise and bundle a production-mode MedTantra web server, your static assets and client-side code -- making it trivial to deploy to production.

Build as normal with:

`docker build . -t <project>`

Then run with:

`docker run -p 4000:4000 <project>`

Navigating to http://<docker_host>:4000 will yield the MedTantra project code.


## References

Credits to Lee Benson for the amazing ReactQl.
