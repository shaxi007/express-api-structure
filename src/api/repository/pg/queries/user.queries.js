const { fetch } = require('../../../../config/postgres.config');

const someQuery = () =>
	// eslint-disable-next-line implicit-arrow-linebreak
	new Promise(async (resolve) => {
		const hello = await fetch("SELECT 'hello'");
		resolve(hello);
	});

exports.queries = {
	someQuery,
};
