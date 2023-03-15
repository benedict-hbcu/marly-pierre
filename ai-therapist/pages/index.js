import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [sessionInput, setSessionInput] = useState("");
  const [result, setResult] = useState();
  const [chatHistory, setChatHistory] = useState([]);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ session: sessionInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      // Add user's statement and AI's response to the chat history array
      setChatHistory([...chatHistory, { user: sessionInput, ai: data.result }]);
      setResult(data.result);
      setSessionInput("");
      console.log(chatHistory.length)
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }


  return (
    <div>
      <Head>
        <title><i>Start Session</i></title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/logo1.png" />
        <h3><i>Start Session</i></h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="session"
            placeholder="Enter a statement to begin"
            value={sessionInput}
            onChange={(e) => setSessionInput(e.target.value)}
          />
        </form>
        <div className={styles.chatContainer}>
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <div className={styles.chatBubbleUser}>{chat.user}</div>
              <div className={styles.chatBubbleAi}>{chat.ai}</div>
            </div>
          ))}
        </div>    
      </main>
    </div >
  );
}
