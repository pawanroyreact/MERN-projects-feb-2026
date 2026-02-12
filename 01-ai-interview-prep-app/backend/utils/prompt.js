const questionAnswerPrompt = (
  role,
  experience,
  topicsToFocus,
  numberOfQuestions,
) => `You are an AI trained to generate technical interview questions and answers.
    
    Task:
    - Role : ${role}
    - Candidate Experience : ${experience} years
    - Focus Topics : ${topicsToFocus}
    - Write ${numberOfQuestions} interview questions
    - For each question, generate a detailed but beginner-friendly answer.
    - If the answer needs a code example, add a small code blcok inside.
    - Keep formatting very clean.
    - Return a pure JSON array like:
    [
    
     {
        "question": "Question here?",
        "answer": "Answer here."
     },
     ...
    ]
     Important : Do Not add any extra text. Only return valid JSON.
    `;

const conceptExplainPrompt = (question) => `
        You are an AI trained to generate explainations fro a given interview question.

        Task:
        - Explain the following interview question and its concept in depth as if you're teaching a beginner developer.
        - Question : "${question}"
        - After the explaination, provide a short and clear title that summarizes the concept for the article or page header.
        - if the explaination includes a code example, provide a small code block.
        - Keep the formatting very clean and clear.
        - Return the result as a valid JSON object in the following format:

        {
        "title": "Short title here?",
        "explaination": "Explaination here."
        }

        Important : Do Not add any extra text outside the JSON format. Only return valid JSON.
        `;

module.exports = { conceptExplainPrompt, questionAnswerPrompt };
