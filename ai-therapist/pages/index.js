import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [sessionInput, setSessionInput] = useState("");
  const [result, setResult] = useState();

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

      setResult(data.result);
      setSessionInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Start Session</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/logo1.png" />
        <h3>Start Session</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="session"
            placeholder="Enter a statement to begin"
            value={sessionInput}
            onChange={(e) => setSessionInput(e.target.value)}
          />
          <input type="submit" value="Talk to me !" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
