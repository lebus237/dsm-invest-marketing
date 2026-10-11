const port = 9333;
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outDir = "C:\\Users\\445R G6\\.cursor\\projects\\c-workspaces-ITS-DSM-marketing\\assets";
const userDir = `${process.env.TEMP}\\ce-cdp-shot`;

const proc = Bun.spawn(
  [
    chromePath,
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDir}`,
    "about:blank",
  ],
  { stdout: "ignore", stderr: "ignore" },
);

async function waitForChrome() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return;
    } catch {
      // chrome still starting
    }
    await Bun.sleep(250);
  }
  throw new Error("Chrome did not start");
}

await waitForChrome();
const created = await fetch(`http://127.0.0.1:${port}/json/new?http://localhost:3000/`, { method: "PUT" });
const tabText = await created.text();
const tab = JSON.parse(tabText);
const ws = new WebSocket(tab.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
});
await new Promise((resolve) => ws.addEventListener("open", resolve, { once: true }));

function send(method, params = {}) {
  const msgId = ++id;
  return new Promise((resolve, reject) => {
    pending.set(msgId, (msg) => {
      if (msg.error) reject(new Error(JSON.stringify(msg.error)));
      else resolve(msg.result);
    });
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 1000,
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Page.navigate", { url: "http://localhost:3000/" });
await send("Page.loadEventFired").catch(() => {});
await Bun.sleep(2500);

await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 1600,
  deviceScaleFactor: 1,
  mobile: false,
});
const sections = ["home", "about", "echo-intelligence", "information-to-action"];
for (const section of sections) {
  await send("Runtime.evaluate", {
    expression: `(() => {
      document.documentElement.style.scrollBehavior = "auto";
      document.getElementById(${JSON.stringify(section)}).scrollIntoView({ behavior: "instant", block: "start" });
    })()`,
  });
  await Bun.sleep(400);
  const shot = await send("Page.captureScreenshot", { format: "png" });
  const file = `${outDir}\\${section}-shot.png`;
  await Bun.write(file, Buffer.from(shot.data, "base64"));
  console.log("wrote", file);
}

await send("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true,
});
for (const section of ["home", "echo-intelligence", "information-to-action"]) {
  await send("Runtime.evaluate", {
    expression: `(() => {
      document.documentElement.style.scrollBehavior = "auto";
      document.getElementById(${JSON.stringify(section)}).scrollIntoView({ behavior: "instant", block: "start" });
    })()`,
  });
  await Bun.sleep(400);
  const shot = await send("Page.captureScreenshot", { format: "png" });
  const file = `${outDir}\\${section}-mobile.png`;
  await Bun.write(file, Buffer.from(shot.data, "base64"));
  console.log("wrote", file);
}

ws.close();
proc.kill();
process.exit(0);
