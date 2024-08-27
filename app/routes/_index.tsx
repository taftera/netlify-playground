import type { MetaFunction } from "@remix-run/node";

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
  return (
    <div>
      <h1>taftera</h1>
    </div>
  );
}
export async function loader({ request }: { request: Request }) {
  return null;
}
