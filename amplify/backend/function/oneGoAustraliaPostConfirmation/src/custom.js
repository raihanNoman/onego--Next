/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

// environment variables always gave me problems. So hardcoding table name
// const tableName = process.env.USERTABLE;

exports.handler = async (event, context) => {
  if (!event?.request?.userAttributes?.sub) {
    console.log(
      "AWS COGNITO ERROR: No Sub found. \n AWS LAMDA ERROR: Failed to put Cognito user to DDB "
    );
    return;
  }

  const now = new Date();
  const timeStamp = now.getTime();
  const tableName = process.env.USERTABLE;

  const userItem = {
    __typename: { S: "User" },
    _lastChangedAt: { N: timeStamp.toString() },
    _version: { N: "1" },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    name: { S: event.request.userAttributes.name },
    phone: { S: event.request.userAttributes.phone_number },
    picture: { S: event.request.userAttributes.picture },
  };

  const params = {
    Item: userItem,
    TableName: tableName,
  };

  try {
    await ddb.putItem(params).promise();
    console.log("AWS LAMDA SUCCESS: Put oneGo-CognitoUser to DDB", userItem.id);
  } catch (e) {
    console.log("AWS LAMDA ERROR: Failed to put Cognito user to DDB ", e);
  }
};
