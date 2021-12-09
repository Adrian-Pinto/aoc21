/**
     * Define el metodo chunk para el Objeto Array
     * Este divide el Array por el n numero de veces indicado en el parametro de entrada
     * ? - https://stackoverflow.com/a/11638192
     */
 export default Object.defineProperty(Array.prototype, 'chunk', { value(n) { return !this.length ? [] : [this.slice(0, n)].concat(this.slice(n).chunk(n)); } });
