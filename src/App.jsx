import React, { useState } from 'react'; 
import run from "./Ai.js";   
import "./App.css"

export default function App() {   
  let [Prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAskAI = async () => {     
    if (!Prompt.trim()) return;

    setIsLoading(true);
    setResponse("");

    try {       
      const AskBro = await run(); // Initialize AI       
      const aiResponse = await AskBro(Prompt); // Get AI response       
      setResponse(aiResponse);
    } catch (error) {       
      console.error("Error in communicating with AI:", error);
      setResponse("Oops! Something went wrong while fetching the AI response.");
    } finally {
      setIsLoading(false);
    }
  };    

  return (             
    <main className="app-main">         
      <nav className="main-nav">           
        <h1 className="nav-title">Chat.Ai</h1>         
      </nav>         
      <div className="chat-container">
        <h1 className="page-title">Ask Anything</h1>         
        <div className="input-wrapper">
          <input           
            type="text"           
            onChange={(e) => setPrompt(e.target.value)}           
            placeholder="Ask AI something..."
            className="ai-input"
            id="prompt-input"         
          />         
          <button 
            onClick={handleAskAI}
            className="ai-button"
            id="ask-button"
            disabled={isLoading}
          >
            {isLoading ? 'Thinking...' : 'Ask AI'}
          </button>
        </div>

        {isLoading && <div className="loader"></div>}

        {response && (
          <div id="ai-response" className="ai-response-container">
            <div className="ai-response-content">
              <p>{response}</p>
            </div>
          </div>
        )}
      </div>
    </main>    
  ) 
}