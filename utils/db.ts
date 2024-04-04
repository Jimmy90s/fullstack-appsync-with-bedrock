import {
  PutCommand,
  ScanCommand,
  ScanCommandOutput,
} from "@aws-sdk/lib-dynamodb";
import { dbClient } from "@/config";

export type IScanCommandOutput<T> = Omit<ScanCommandOutput, "Items"> & {
  Items?: T;
};

export async function getAll() {
  const data = (await dbClient.send(
    new ScanCommand({
      TableName: process.env.DATABASE_NAME,
    })
  )) as IScanCommandOutput<
    {
      date: string;
      weighted_return?: string;
      return?: string;
      ticker: string;
      weight: string;
    }[]
  >;

  return data.Items;
}
