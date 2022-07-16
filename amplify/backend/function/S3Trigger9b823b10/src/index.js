/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const sharp = require("sharp");
const aws = require("aws-sdk");
const s3 = new aws.S3();

exports.handler = async function (event, context) {
  if (event.Records[0].eventName === "ObjectRemoved:Delete") {
    return;
  }

  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;

  try {
    let image = await s3.getObject({ Bucket: bucket, Key: key }).promise();
    image = await sharp(image.body);
    const metadata = await image.metadata();
    if (metadata.width > 1000) {
      const resizedImage = await image.resize({ width: 1000 }).toBuffer();
      await s3
        .putObject({ Bucker: bucket, Body: resizedImage, Key: key })
        .promise();
      return;
    } else {
      return;
    }
  } catch (error) {
    context.fail(`Error resizing image:  ${error}`);
  }

  // console.log("Received S3 event:", JSON.stringify(event, null, 2));
  // console.log(`Bucket: ${bucket}`, `Key: ${key}`);
};
