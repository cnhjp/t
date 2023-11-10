import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.end(`Hello! Serverless`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.get("/api/drop", (req, res) => {
  res.json({
    data: [
      { label: "选项一", value: 1 },
      { label: "选项二", value: 2 },
      { label: "选项三", value: 3 },
      { label: "选项四", value: 4 },
      { label: "选项五", value: 5 },
    ],
  });
});

export default app;
