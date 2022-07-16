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

// use environment variables for stripe secret key
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

  // DEBUG Security
  // for security measures, its best to send actual id of the trip,
  // then query the trip and then calculate the amount to be charged
  // or else someone can hack this and charge obnoxious amounts

  const paymentIntent = await stripe.paymentIntents.create({
    amount: event.arguments.amount,
    currency: "aud",
  });
  // DEBUG Security
  // you can also return the amount and test if the amount returned is the same
  // as the amount requested
  return {
    clientSecret: paymentIntent.client_secret,
  };
};

//   console.log(`EVENT: ${JSON.stringify(event)}`);
//   return {
//     statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//     body: JSON.stringify("Hello from Lambda!"),
//   };

/**
|--------------------------------------------------
| event : {
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
