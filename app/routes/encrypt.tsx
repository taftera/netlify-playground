import type { MetaFunction } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { encryptReview } from "~/data/encrypt.server";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "@taftera" },
    {
      name: "Netlify | RemixRun - playground ",
      content: "Just checking a few things.",
    },
  ];
};

export default function Index() {
  const data: any = useLoaderData();
  // const { hash } = bcryptjs;
  // var salt = bcrypt.genSaltSync(12);
  const salt = "$2a$12$f6bTMOA2NpZ7xnT942nh9.";
  var hash = bcrypt.hashSync("taftera", salt);
  // console.log("salt: ", salt);
  console.log("hash: ", hash);
  // console.log("---> ", hashTest);
  const result = "$2a$12$f6bTMOA2NpZ7xnT942nh9.gSQ/b1EYfD0iPY8dE1t/y345cJQ0oZW";
  console.log("loaderData: ", data);
  return (
    <div>
      <h1>taftera</h1>
      <h2>
        hash: <small>{hash}</small>
      </h2>
      <h2>
        data: <small>{data}</small>
      </h2>
      <h3>{hash === data ? "true match" : "error"}</h3>
    </div>
  );
}
export async function loader({ request }: { request: Request }) {
  // Creck for valid session cookie.
  const loaderSalt = "$2a$12$f6bTMOA2NpZ7xnT942nh9.";
  const result = await encryptReview("taftera", loaderSalt);
  console.log("loader", result);
  return json(result);
}
