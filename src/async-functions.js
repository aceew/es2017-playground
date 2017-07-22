/**
 * New syntax for writing async code.
 * @see https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
 * @see https://github.com/tc39/ecmascript-asyncawait
 */

/**
 * Gets some data after 2 seconds.
 * @return {Promise<Object>}
 */
const getData = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve({ hello: 'world' });
  }, 2000);
});

const logData = async () => {
  const response = await getData();
  console.error(response);
};

logData();
// Should log out an object after 2 seconds
