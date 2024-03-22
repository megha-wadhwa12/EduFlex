import dotenv from "dotenv";
dotenv.config({ path: "./../.env" });
const gemini_key = process.env.VITE_GEMINI_API;

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(gemini_key);
function removeAsterisks(str) {
    return str.replace(/\*/g, ''); // Using regular expression to replace all asterisks with an empty string
}

async function content(topic) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{text: `You are making a learning content for a topic. Give a basic idea in 300 words and 3 paragraph about the topic.`}],
      },
      {
        role: "model",
        parts: [{text: "Ok, Please give me a topic"}],
      },
    ],
    generationConfig: {
      maxOutputTokens: 10000,
      temperature: 0.9,
      topK: 1,
      topP: 1,
    },
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  });
  const res = await chat.sendMessage(topic);
  const text = res.response.text();
  const { totalTokens } = await model.countTokens(text);
  const withoutText = removeAsterisks(text)
  console.log(withoutText);
  console.log(totalTokens);
  } catch (error) {
    content(topic)
  }
}
// async function subtopic(topic) {
//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
  
//     const chat = model.startChat({
//       history: [
//         {
//           role: "user",
//           parts: [{text: `You are making a learning content for a topic. Give 10 subtopic about the topic. only give subtopics`}],
//         },
//         {
//           role: "model",
//           parts: [{text: "Ok, I remembered the Schema, Please give me a topic"}],
//         },
//       ],
//       generationConfig: {
//         maxOutputTokens: 10000,
//         temperature: 0.9,
//         topK: 1,
//         topP: 1,
//       },
//       safetySettings: [
//         {
//           category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//           threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//         {
//           category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//           threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//         {
//           category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//           threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//         {
//           category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//           threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//       ],
//     });
//     const res = await chat.sendMessage(topic);
//     const text = res.response.text();
//     const withoutAsterisks = removeAsterisks(text)
//     let textArray = withoutAsterisks.split("\n")
//     textArray = textArray.filter((item)=>item!=="")
//     return textArray
//     } catch (error) {
//         console.log(error);
//       content(topic)
//     }
//   }
// // console.log("without\nasterisks");