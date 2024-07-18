import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({});
async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  let message: string;
  switch (event.httpMethod) {
    case "GET ":
      message = "Hello from GET";
      break;

    case "POST":
      message = "Hello from POST";

      break;
    default:
      break;
  }
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(message),
  };

  return response;
}

export { handler };
