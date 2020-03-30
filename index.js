const wasmModule = require("./murmur3.wasm");

const murmurhash = new WebAssembly.Instance(wasmModule);
console(murmurhash.exports.hash32("012")); // 3