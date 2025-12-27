const fs = require("fs");
const https = require("https");
const { XMLParser } = require("fast-xml-parser");

const RSS_URL = "https://blog.ankan.in/rss.xml";
const README_PATH = "README.md";
const MAX_POSTS = 4;

function fetchRSS(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "github-actions" } }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

(async () => {
  try {
    const xml = await fetchRSS(RSS_URL);

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
      allowBooleanAttributes: true
    });

    const parsed = parser.parse(xml);
    const items = parsed.rss.channel.item.slice(0, MAX_POSTS);

    const blogList = items
      .map(post => `- [${post.title}](${post.link})`)
      .join("\n");

    const readme = fs.readFileSync(README_PATH, "utf-8");

    const updatedReadme = readme.replace(
      /<!-- BLOG-POST-LIST:START -->[\s\S]*?<!-- BLOG-POST-LIST:END -->/,
      `<!-- BLOG-POST-LIST:START -->\n${blogList}\n<!-- BLOG-POST-LIST:END -->`
    );

    if (readme !== updatedReadme) {
      fs.writeFileSync(README_PATH, updatedReadme);
      console.log("README updated.");
    } else {
      console.log("No changes detected.");
    }

  } catch (err) {
    console.error("Failed to update blogs:", err);
    process.exit(1);
  }
})();
