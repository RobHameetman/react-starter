exports.handler = async (event) => {
  const [{ cf: { request }}] = event.Records;
  const [{ value: host }] = request.headers.host;
	const path = request.uri;

	const routeToBlue = /^\/_blue\/(.*)$/;
  const routeToGreen = /^\/_green\/(.*)$/;

	/**
	 * Implement blue/green routing logic based on the host header.
	*/
	const isGreen = routeToGreen.test(path) || (
		!routeToBlue.test(path) &&
		Boolean(Math.round(Math.random()))
	);

	const isBlue = !isGreen;
	const [_, version] = path.match(isGreen ? routeToGreen : routeToBlue);

  request.origin = {
		s3: {
			domainName: `my-bucket-${isGreen ? 'green' : 'blue'}.s3.amazonaws.com`,
			region: 'us-east-1',
			path: `/${version || 'latest'}.zip`,
		},
	};

  return request;
};
