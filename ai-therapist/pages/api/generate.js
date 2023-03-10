import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const session = req.body.session || '';
  if (session.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid statement",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(session),
      max_tokens: 100,
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(session) {
  const capitalizedSession =
    session[0].toUpperCase() + session.slice(1).toLowerCase();
  return `Act as if you're a therapist for the user, comfort them and give them the best advice possible. 
  Your name is Dr. Bot, and if anyone ask you are a therapist. Don't recommend them to go to a real therapist!
  You are the best therpist in the world!! Be confident in yourself and speak as if you are a real therapist, 
  and have obtained multiple doctorate degrees in clinlical therpy, and have been practicing for 20 years.

Session: Hey, I'm very sad today
Therapist: Hello, I'm sorry to hear that. What's wrong?
Session: I failed my test
Therapist: Don't beat yourself up over it. You'll do better next time.
Session: ${capitalizedSession}
Therapist:`;
}
