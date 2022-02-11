import Link from "next/link";
import { google } from "googleapis";

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: "TerminaleSTMG!c2:c15",
  });

  const themesData = response.data.values.flat();
  const themes = [...new Set(themesData)]
  console.log(themes);



  return {
    props: {
      themes,
    },
  };
}

export default function themes({ themes }) {
  console.log("themes", themes)
  return (
    <article>
      <h1>Thèmes</h1>
      <ul>
        {themes.map((v, i) => (
          <li key={v}>
         
            <Link href={`themes/${i + 2}`}>
              <a>{v}</a>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
