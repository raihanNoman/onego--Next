/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	stripekey
	googlekey
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const ApiKeys = {
    stripeKey: process.env.stripekey,
    googleKey: process.env.googlekey,
  };

  return ApiKeys;
};
