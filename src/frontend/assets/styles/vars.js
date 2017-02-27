// Example of global css var throw webpack config

module.exports = {
    customProperties: {
        variables: {
            // c_bg: "#222"
        },
    },
    customMedia: {
        extensions: {
            v_small:   "(min-width: 30rem)",
            v_medium:  "(min-width: 48rem)",
            v_large:   "(min-width: 64rem)",
            v_xlarge:  "(min-width: 75rem)",
            v_xxlarge: "(min-width: 90rem)",
        },
    },
};