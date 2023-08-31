import { APIGatewayProxyEvent } from "aws-lambda";
import { parseUserId, parseJwtToken } from "../auth/utils";

export function getUserId(event: APIGatewayProxyEvent): string {
  const jwtToken = parseJwtToken(event.headers.Authorization);

  return parseUserId(jwtToken)
}