import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
  return { hello: "Simple Rest API Service from Fastify" };
});

const start = async () => {
  try {
    await app.listen({ port: 5000 });
    console.log("Server is running on http://localhost:5000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();