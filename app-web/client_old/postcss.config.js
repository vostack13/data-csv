/* eslint-disable sort-keys */
module.exports = {
    parser: false,

    plugins: {
        'postcss-selector-matches': {},
        'postcss-selector-not'    : {},

        'postcss-preset-env': {
            stage: 0,

            features: {
                'nesting-rules': true,

                'custom-properties': {
                    importFrom: [
                        './app/common/ui-kit-react/assets/variables.css',
                        './app/common/ui-kit-react/assets/colors.css',
                        // './app/assets/variables.css',
                    ],
                },
            },
        },

        'autoprefixer': {},
    },
};
