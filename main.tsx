/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "thinkfwd",
  description: "so here's my blog",
  footer: <footer style="position: absolute; bottom: 0; left: 0;">used deno blog <a style="color: cyan;" href="https://deno.land/x/blog@0.7.0">package</a></footer>,
  links: [
  { title: "GitHub", url: "https://github.com/yeahnahabsolutely" },
  ],
});
