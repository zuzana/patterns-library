const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify');
const babel = require('rollup-plugin-babel');

const constants = require('../../constants');
const common = require('./_common');

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

async function buildApp() {
  const bundle = await rollup.rollup({
    ...common.inputOptions,
    plugins: [
      babel({
        runtimeHelpers: true,
      }),
      ENV === constants.ENV.PROD ? uglify() : () => {},
    ],
    input: `${CWD}/src/app/app.js`,
  });
  const file = common.adaptSlashes(`${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/app/app.js`);
  console.log(`Styleguide Bundel: ${file}`); // eslint-disable-line
  // or write the bundle to disk
  await bundle.write({
    ...common.outputOptions,
    file,
  });
}

module.exports = buildApp;
