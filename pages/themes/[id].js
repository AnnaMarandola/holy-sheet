import { google } from "googleapis";

export async function getServerSideProps({ query }) {
  // Auth
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Query

  const { id } = query;
  const range = `TerminaleSTMG!A${id}:E${id}`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  // Result
  const [niveau, theme, question, notion, fiche] =
    response.data.values[0];

  return {
    props: {
      niveau,
      theme,
      question,
      notion,
      fiche,
    },
  };
}

function Post({ niveau, theme, question, notion, fiche }) {
  return (
    <article>
  <h2>Programme: {niveau}</h2>
      <h3>{theme}</h3>
        <h4>{question}</h4>
        <h5>notion: {notion}</h5>
        <p>fiche: {fiche}</p>
    </article>
  );
}

export default Post;
