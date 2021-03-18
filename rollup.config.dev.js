const vue = require('rollup-plugin-vue')
const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/datav.js')
const outputEsPath = path.resolve(__dirname, './dist/datav.es.js')

module.exports = {
    input: inputPath,
    output: [{
        file: outputUmdPath,
        format: 'umd',
        name: 'datav',
        globals: {
            vue: 'Vue'
        }
    }, {
        file: outputEsPath,
        format: 'es',
        globals: {
            vue: 'Vue'
        }
    }],
    plugins: [
        vue(),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        json(),
        postcss({
            plugins: [
                require('autoprefixer')({overrideBrowserslist: ['> 0.15% in CN']})
            ]
        })
    ],
    external: ['vue']
}