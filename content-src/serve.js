/* Minimal loopback static server for local preview. Not published. */
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "dist");
const PORT = Number(process.env.PORT || 4173);
const HOST = "127.0.0.1";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8"
};

http
  .createServer((req, res) => {
    let urlPath;
    try { urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
    catch { res.writeHead(400).end("Bad request"); return; }

    if (urlPath.endsWith("/")) urlPath += "index.html";

    const resolved = path.resolve(path.join(ROOT, urlPath));
    // Refuse anything that escapes the output directory.
    if (resolved !== ROOT && !resolved.startsWith(ROOT + path.sep)) {
      res.writeHead(403).end("Forbidden");
      return;
    }

    fs.stat(resolved, (err, st) => {
      if (err || !st.isFile()) {
        res.writeHead(404, { "content-type": "text/plain; charset=utf-8" }).end("404 " + urlPath);
        return;
      }
      res.writeHead(200, {
        "content-type": TYPES[path.extname(resolved).toLowerCase()] || "application/octet-stream",
        "content-length": st.size,
        "cache-control": "no-store"
      });
      fs.createReadStream(resolved).pipe(res);
    });
  })
  .listen(PORT, HOST, () => {
    console.log(`serving ${ROOT} at http://${HOST}:${PORT}/`);
  });
