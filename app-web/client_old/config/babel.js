module.exports = {
    babelrc       : false,
    cacheDirectory: false,

    plugins: [
        '@babel/plugin-transform-runtime',
        ['@babel/plugin-proposal-class-properties', {'loose': true}],

        // [
        // 	"module-resolver", {
        // 		"root": ["./app"]
        // 	}
        // ],
    ],

    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
    ],
};
