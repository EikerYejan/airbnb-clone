module.exports = (config) => {
  const tsLoader = config.module.rules.find((r) => r.loader.includes('ts-loader'))

  if (tsLoader) {
    tsLoader.options.getCustomTransformers = (program) => {
      return {
        before: [require('@nestjs/swagger/plugin').before({ introspectComments: true }, program)],
      }
    }
  }

  return config
}
