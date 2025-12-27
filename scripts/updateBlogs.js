const fs = require("fs");
const https = require("https");
const xml2js = require("xml2js");

const RSS_URL = "https://blog.ankan.in/rss.xml";
const README_PATH = "README.md";
const MAX_POSTS = 4;

function fetchRSS(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

(async () => {
  try {
    const rssXML = await fetchRSS(RSS_URL);

    const parsed = await xml2js.parseStringPromise(rssXML);
    const items = parsed.rss.channel[0].item.slice(0, MAX_POSTS);

    const blogList = items.map(item => {
      const title = item.title[0];
      const link = item.link[0];
      return `- [${title}](${link})`;
    }).join("\n");

    const readme = fs.readFileSync(README_PATH, "utf-8");

    const updatedReadme = readme.replace(
      /<!-- BLOG-POST-LIST:START -->[\s\S]*?<!-- BLOG-POST-LIST:END -->/,
      `<!-- BLOG-POST-LIST:START -->\n${blogList}\n<!-- BLOG-POST-LIST:END -->`
    );

    if (readme !== updatedReadme) {
      fs.writeFileSync(README_PATH, updatedReadme);
      console.log("README updated with latest blog posts.");
    } else {
      console.log("No changes detected.");
    }

  } catch (err) {
    console.error("Failed to update blogs:", err);
    process.exit(1);
  }
})();
