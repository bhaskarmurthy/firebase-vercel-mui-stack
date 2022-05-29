import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { functions } from "../services/firebase";
import { httpsCallable } from "firebase/functions";

export const loader: LoaderFunction = async () => {
  const helloWorld = httpsCallable(functions, "helloWorld");
  const result = await helloWorld();
  return result.data;
};

export default function Index() {
  const result = useLoaderData();

  return (
    <Box>
      <Typography variant="h1">Welcome to Remix</Typography>
      <Typography variant="body1">{result}</Typography>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </Box>
  );
}
