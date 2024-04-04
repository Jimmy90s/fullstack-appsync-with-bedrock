import { Navbar } from "@/components/navbar";
import { CorePortfolio, ListCorePortfoliosQuery } from "@/backend/src/API";
// import { listCorePortfolios } from "@/backend/src/graphql/mutations";
import { listCorePortfolios } from "@/backend/src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { config } from "@/aws-exports";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { getAll } from "@/utils/db";
// const client = new DynamoDBClient(config.API.GraphQL);
// const docClient = DynamoDBDocumentClient.from(client);

// export const main = async () => {
//   const command = new ScanCommand({
//     ProjectionExpression: "#date, ticker, weight",
//     ExpressionAttributeNames: { "#date": "date" },
//     TableName: "CorePortfolio-xbcqjrbktnfqrgznodb3kdlllq-NONE",
//   });

//   const response = await docClient.send(command);
//   // for (const bird of response.Items) {
//   //   console.log(`${bird.Name} - (${bird.Color}, ${bird.AvgLifeSpan})`);
//   // }
//   return response;
// };

// console.log(main());
async function Home() {
  const data = await getAll();
  if (!data) {
    return <>no data</>;
  }
  console.log(data);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const handler = async (req: string) => {
  //   const { Item } = await client.send(
  //     new ListTablesCommand({
  //       TableName: "CorePortfolio-xbcqjrbktnfqrgznodb3kdlllq-NONE",
  //       Key: {
  //         date: { S: req },
  //       },
  //     })
  //   );
  //   return Item;
  // };
  // console.log(handler("2024-03-28 00:00:00"));

  // const generateAIExplanation = async () => {
  //   const res = (await API.graphql({
  //     query: listCorePortfolios,
  //   })) as GraphQLResult<ListCorePortfoliosQuery>;
  //   // console.log(data);
  //   // const aiExplanation = JSON.parse(
  //   //   res.data?.listCorePortfolios.
  //   // ).completions;
  //   // console.log(aiExplanation);
  //   // function extractJson(str: string) {
  //   //   // Use a regex to find content between ```json and ```
  //   //   const regex = /```json\s*([\s\S]+?)\s*```/;
  //   //   // console.log(str)
  //   //   // console.log(regex)
  //   //   const match = str.match(regex);

  //   //   if (match && match[1]) {
  //   //     try {
  //   //       return JSON.parse(match[1]);
  //   //     } catch (error) {
  //   //       console.error("Failed to parse JSON:", error);
  //   //     }
  //   //   }
  //   // }
  //   // const extractedData = extractJson(aiExplanation);
  //   // if (extractedData) {
  //   //   setTitle(extractedData.title);
  //   //   setDescription(extractedData.description);
  //   // }
  // };

  return (
    <>
      <Navbar />
      <Authenticator signUpAttributes={["email"]}>
        <section className="flex justify-center">
          {/* <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center max-w-lg"
        >
          <section>
            <label htmlFor="explanation-title" className="label">
              <span className="label-text">What is the explanation title?</span>
            </label>
            <input
              id="explanation-title"
              name="explanation-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Hawaiian Stocks"
              className="input input-bordered input-accent w-full"
            />
          </section>
          <section className="mt-4">
            <label htmlFor="explanation-description" className="label">
              <span className="label-text">
                What is the explanation description?
              </span>
            </label>
            <textarea
              id="explanation-description"
              name="explanation-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Start with corn tortilla..."
              className="input input-bordered input-accent w-full h-48"
            />
          </section>
          <section className="flex flex-col w-full mt-4">
            <button
              type="button"
              onClick={() => generateAIExplanation()}
              className="btn btn-primary mb-4 "
            >
              Generate AI Explanation
            </button>
            <button type="submit" className="btn btn-accent">
              submit
            </button>
          </section>
        </form> */}
        </section>
      </Authenticator>
    </>
  );
}

export default Home;
