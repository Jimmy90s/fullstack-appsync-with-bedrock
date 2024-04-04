import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const awsCredetnials = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
};

const dynamoConfig = {
  region: process.env.AWS_REGION,
  credentials: awsCredetnials,
} as {
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
  region: string;
};

const dbClient = DynamoDBDocument.from(new DynamoDB(dynamoConfig), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: false,
  },
});

export { dbClient };
