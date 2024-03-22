import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useEffect, useState } from "react";
import SubTopicDetail from "./SubTopicDetail";

const Content = () => {
  const [subTopics, setSubTopics] = useState([]);
  const [content, setContent] = useState([]);
  const gemini_key = import.meta.env.VITE_GEMINI_API;
  const genAI = new GoogleGenerativeAI(gemini_key);
  function removeAsterisks(str) {
    return str.replace(/\*/g, ""); // Using regular expression to replace all asterisks with an empty string
  }
  async function subtopic(topic) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [
              {
                text: `You are making a learning content for a topic. Give 10 subtopic about the topic. only give subtopics, don't include decalration of response`,
              },
            ],
          },
          {
            role: "model",
            parts: [
              { text: "Ok, I remembered the Schema, Please give me a topic" },
            ],
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
      const withoutAsterisks = removeAsterisks(text);
      let textArray = withoutAsterisks.split("\n");
      textArray = textArray.filter((item) => item !== "");
      textArray.shift();
      const UpdatedtextArray = textArray.map((e) => {
        return e.split(".").slice(1).join(".").trim();
      });
      setSubTopics(UpdatedtextArray);
    } catch (error) {
      console.log(error);
        subtopic(topic);
    }
  }

  const finalContent = async () => {
    
  };
  useEffect(() => {
    subtopic("Web Development");
  }, []);
  console.log(subTopics);
  return <div>
    {subTopics.map((e,i)=>{
        return <SubTopicDetail key={i} subTopics={e}/>
    })}
  </div>;
};

export default Content;
