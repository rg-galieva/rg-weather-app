function buildConfig(env) {
    return require('./tools/webpack/' + env + '.js')({ env: env })
}

module.exports = buildConfig;