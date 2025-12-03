import express from "express";
import redis from "redis";

const app = express();

// 🔥 Configuração Redis
const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST || "redis",
    port: process.env.REDIS_PORT || 6379
  }
});
// REDIS: Conexão com o Redis
client.on("connect", () => console.log("🚀 Redis conectado!"));
client.on("error", err => console.log("❌ Erro Redis:", err));
await client.connect();

app.get("/", async (req, res) => {
  const value = await client.incr("visitas");
  res.send(value.toString());
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
