import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const POST: RequestHandler = ({ url }) => {
    

    return new Response("");
};