import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyC9GGF25-CNcSvtQoX3BX_zjUiuWsU1N-c";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    async function AskBro(P)
    {
        const result = await chatSession.sendMessage(P);
        return(result.response.text());
    }
    return AskBro;
  }
  
export default run;
