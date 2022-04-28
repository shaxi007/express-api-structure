/**
 * Common constants across all the environments (dev, staging, prod)
 */
module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	databaseUrl: process.env.DATABASE_URL,
};
