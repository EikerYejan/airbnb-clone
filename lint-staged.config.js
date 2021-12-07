module.exports = {
  '*.{ts,tsx}': (files) => {
    return [`eslint --fix ${files.join(' ')}`, 'nx affected --target=type-check']
  },
}
