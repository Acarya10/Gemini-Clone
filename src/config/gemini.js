/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai

 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */



import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
}  from "@google/generative-ai"

const apiKey = "YOUR_GEMINI_API";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro",
});

const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 0,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response
  console.log(response.text());
  return response.text();
}

export default run;