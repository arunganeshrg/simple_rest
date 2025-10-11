import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
  return { hello: "Simple Rest API Service from Fastify Source 1" };
});

const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log("Server is running on http://localhost:3000");
  } catch (err) {
    console.error("Error starting server:", err); // Added detailed error logging
    app.log.error(err);
    process.exit(1);
  }
};

start();