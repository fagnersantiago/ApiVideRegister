import app from "./shared/infra/app";

const port = 3333;

app.listen(`${port}`, () => {
  console.log(`server started on port ${port}`);
});
