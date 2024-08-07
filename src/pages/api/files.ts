// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const projectStructure = {
  name: "test-technique",
  children: [
    {
      name: "pages",
      children: [
        { name: "index.js" },
        { name: "_app.js" },
        { name: "_document.js" },
        {
          name: "api",
          children: [{ name: "hello.js" }],
        },
      ],
    },
    {
      name: "public",
      children: [{ name: "favicon.ico" }, { name: "vercel.svg" }],
    },
    {
      name: "styles",
      children: [{ name: "globals.css" }, { name: "Home.module.css" }],
    },
    { name: ".gitignore" },
    { name: "README.md" },
    { name: "next.config.js" },
    { name: "package.json" },
    { name: "postcss.config.js" },
    { name: "tailwind.config.js" },
    { name: "tsconfig.json" },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(projectStructure);
}
