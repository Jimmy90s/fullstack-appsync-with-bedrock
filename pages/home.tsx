import { Navbar } from "@/components/navbar";
import {
  CreateStockExplanationMutation,
  GenerateStockExplanationQuery,
} from "@/src/API";
import { createStockExplanation } from "@/src/graphql/mutations";
import { generateStockExplanation } from "@/src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useState } from "react";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const generateAIExplanation = async () => {
    const res = (await API.graphql({
      query: generateStockExplanation,
      variables: {
        prompt: title,
      },
    })) as GraphQLResult<GenerateStockExplanationQuery>;
    console.log(res);
    const aiExplanation = JSON.parse(
      res.data?.generateStockExplanation!
    ).completions;
    console.log(aiExplanation);
    function extractJson(str: string) {
      // Use a regex to find content between ```json and ```
      const regex = /```json\s*([\s\S]+?)\s*```/;
      // console.log(str)
      // console.log(regex)
      const match = str.match(regex);

      if (match && match[1]) {
        try {
          return JSON.parse(match[1]);
        } catch (error) {
          console.error("Failed to parse JSON:", error);
        }
      }
    }
    const extractedData = extractJson(aiExplanation);
    if (extractedData) {
      setTitle(extractedData.title);
      setDescription(extractedData.description);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const createRes = (await API.graphql({
      query: createStockExplanation,
      variables: {
        input: {
          title,
          description,
        },
      },
    })) as GraphQLResult<CreateStockExplanationMutation>;

    console.log(createRes.data?.createStockExplanation);
  };
  return (
    <>
      <Navbar />
      <Authenticator signUpAttributes={["email"]}>
        <section className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center max-w-lg"
          >
            <section>
              <label htmlFor="explanation-title" className="label">
                <span className="label-text">
                  What is the explanation title?
                </span>
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
          </form>
        </section>
      </Authenticator>
    </>
  );
}

export default Home;
