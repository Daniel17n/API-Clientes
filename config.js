module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://localhost/apidb',
  SECRET_TOKEN: 'miclavedetokens',
};
