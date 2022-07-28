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
	ENV
	REGION
Amplify Params - DO NOT EDIT */

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

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const config = await loadConfig();
  const stripe = await require("stripe")(config);

  if (event.typeName !== "Mutation") {
    throw new Error("AWS Lamda Error: request is not a mutation");
  }
  if (!event.arguments.amount) {
    throw new Error("AWS Lamda Error: amount is required");
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: event.arguments.amount,
    currency: "aud",
  });

  return paymentIntent.client_secret;
};

/**--------------------------------------------------
 event : {
    "typeName": 'Query'/ mutation
    "FieldName"
    "Arguements"
    "identity"
    "source"
    "request"
    "prev"
}
|--------------------------------------------------
*/
