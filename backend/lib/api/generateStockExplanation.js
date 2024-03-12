export function request(ctx) {
  const prompt = ctx.args.prompt;
  const assistant = `You are a an API that gives responses back in JSON format. The JSON that you return contains a "title" field for the stock explanation, and a "description" field that contains a paragraph about ${prompt} stock ticker.`;

  return {
    resourcePath: "/model/amazon.titan-text-lite-v1/invoke",
    method: "POST",
    params: {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        inputText: `Generate a fundemental analysis of the stock ${prompt}`,
        textGenerationConfig: {
          maxTokenCount: 4000,
          stopSequences: [],
          temperature: 0,
          topP: 1,
        },
      },
    },
  };
}

export function response(ctx) {
  return ctx.result.body;
}
