// simple wrapper for server.mjs
// server.mjs runs in Node (instead of browser), and is written in ESM style based on my taste
// 1. user code (backend.js) import server.mjs and Webpack treat it as external
// problem: Webpack cannot import/require is properly in built file
// 2. user code (backend.js) import server.mjs and Webpack bundle server.mjs only
// problem: cannot import server.mjs deps (e.g. express) at runtime because they are not dep of 
// user code
// discussion: this may not be a problem for "real" user because all deps live in the same node_modules
// in their situation
// 3. user code (backend.js) import server.mjs and Webpack bundle server.mjs and dep
// warning: express is not designed for being bundled, for example there are expressions in require
// 4. no webpack
// problem: user code (backend.js) import .vue files which must be preprocessed by webpack
// final solution: user code import server.js, webpack treat it as external package
// use #2 when possible, and use #final as fallback

module.exports = function startServer() {
    import('./server.mjs').then(module => module.default(...arguments));
};