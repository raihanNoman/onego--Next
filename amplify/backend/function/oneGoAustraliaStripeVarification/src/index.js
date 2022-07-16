/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPESECRET"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/* Amplify Params - DO NOT EDIT
	API_ONEGOAUSTRALIA_GRAPHQLAPIENDPOINTOUTPUT
	API_ONEGOAUSTRALIA_GRAPHQLAPIIDOUTPUT
	API_ONEGOAUSTRALIA_GRAPHQLAPIKEYOUTPUT
	AUTH_ONEGOAUSTRALIA_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const loadConfig = async function () {
  const aws = require("aws-sdk");
  const { Parameters } = await new aws.SSM()
    .getParameters({
      Names: ["STRIPESECRET"].map((secretName) => process.env[secretName]),
      WithDecryption: true,
    })
    .promise();
  return Parameters[0].Value;
};

exports.handler = async (event) => {
  const config = await loadConfig();
  const stripe = await require("stripe")(config);

  if (event.typeName !== "Mutation") {
    throw new Error("AWS Lamda Error: request is not a mutation");
  }

  if (!event.arguments.userID) {
    throw new Error("AWS Lamda Error: userID is required");
  }

  const verificationSession = await stripe.identity.verificationSessions.create(
    {
      type: "document",
      metadata: {
        user_id: event.arguments.userID,
      },
    }
  );

  return {
    varificationID: verificationSession.id,
    clientSecret: verificationSession.client_secret,
  };
};
