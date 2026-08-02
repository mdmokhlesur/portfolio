import { spawn } from "node:child_process";

const processes = [
  {
    name: "api",
    command: "node",
    args: ["server/index.js"],
  },
  {
    name: "vite",
    command: "vite",
    args: ["--host", "127.0.0.1"],
  },
];

function stopAll() {
  children.forEach((child) => {
    if (!child.killed) {
      child.kill();
    }
  });
}

const children = processes.map(({ name, command, args }) => {
  const child = spawn(command, args, {
    stdio: ["inherit", "pipe", "pipe"],
  });

  child.stdout.on("data", (data) => {
    process.stdout.write(`[${name}] ${data}`);
  });

  child.stderr.on("data", (data) => {
    process.stderr.write(`[${name}] ${data}`);
  });

  child.on("exit", (code) => {
    if (code && code !== 0) {
      process.exitCode = code;
      stopAll();
    }
  });

  return child;
});

process.on("SIGINT", () => {
  stopAll();
  process.exit();
});

process.on("SIGTERM", () => {
  stopAll();
  process.exit();
});
