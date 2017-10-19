require('dotenv').config(); // eslint-disable-line

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
};
export default config;

// const nodeEnv = process.env.NODE_ENV || 'development';
// let prefix = '';
// if (nodeEnv === 'test') {
//   prefix = 'TEST_';
// }
// const config = {
//   apiKey: process.env[`${prefix}apiKey`],
//   authDomain: process.env[`${prefix}authDomain`],
//   databaseURL: process.env[`${prefix}databaseURL`],
//   projectId: process.env[`${prefix}projectId`],
//   storageBucket: process.env[`${prefix}storageBucket`],
//   messagingSenderId: process.env[`${prefix}messagingSenderId`],
// };
// export default config;
