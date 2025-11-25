import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function(eleventyConfig) {
  // Add the navigation plugin for documentation sidebar
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Watch CSS files for changes during development
  eleventyConfig.addWatchTarget("./src/assets/css/");

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/CNAME");
  eleventyConfig.addPassthroughCopy("./.nojekyll");

  // Year shortcode for copyright
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Flatten navigation for prev/next links
  eleventyConfig.addFilter("flattenNavigationAndAddNextPrevious", (nav) => {
    const flat = [];
    const flatten = (items) => {
      for (const item of items) {
        flat.push(item);
        if (item.children && item.children.length) {
          flatten(item.children);
        }
      }
    };
    flatten(nav);
    return flat;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
