const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const messages = [
  { role: 'user', content: 'Hello, my name is Akira. What is your name?' },
];

(async () => {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: messages,
  });
  const completionText = completion.data.choices[0].message.content;
  console.log(completionText);
})();
