export default {
  'src/**/*.{js,ts,jsx,tsx}': ['eslint --fix --format=pretty'],
  'src/**/*.{css,scss,less,postcss}': ['stylelint --fix --allow-empty-input'],
  'src/**/*.{js,ts,jsx,tsx,css,scss,less,postcss,md,json}': ['prettier --write --ignore-unknown'],
};
