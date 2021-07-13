
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript'

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'runtime',
        }),
        typescript(),

    ],
    external: Object.keys(pkg.peerDependencies || {}),
};