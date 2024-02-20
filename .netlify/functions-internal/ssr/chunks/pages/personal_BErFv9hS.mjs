import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent, u as unescapeHTML, j as Fragment, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent } from '../astro_C6C2Eh3i.mjs';
import 'kleur/colors';
import { i as $$Icon, b as $$WidgetWrapper, c as $$Headline, a as $$Image, $ as $$Button, j as $$Hero, l as $$Features3, d as $$Header, e as $$PageLayout } from './about_XCoz99y9.mjs';
import { $ as $$Content, a as $$Testimonials } from './mobile-app_CGEYHdjV.mjs';
import { $ as $$CallToAction } from './click-through_D189PO3Y.mjs';
import { twMerge } from 'tailwind-merge';
import { f as findImage, c as getPermalink, A as APP_BLOG, B as BLOG_BASE, C as CATEGORY_BASE, T as TAG_BASE, h as cleanSlug, P as POST_PERMALINK_PATTERN, t as trimSlash, d as getBlogPermalink } from './404_HRkBPS6g.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';

const $$Astro$5 = createAstro("https://secureathlete.net");
const $$Timeline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items = [], classes = {}, defaultIcon } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700"
  } = classes;
  return renderTemplate`${items && items.length && renderTemplate`${maybeRenderHead()}<div${addAttribute(containerClass, "class")}>${items.map(
    ({ title, description, icon, classes: itemClasses = {} }, index = 0) => renderTemplate`<div${addAttribute(twMerge("flex", panelClass, itemClasses?.panel), "class")}><div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"><div><div class="flex items-center justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge(
      "w-10 h-10 p-2 rounded-full border-2",
      defaultIconClass,
      itemClasses?.icon
    ) })}`}</div></div>${index !== items.length - 1 && renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>`}</div><div${addAttribute(`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`, "class")}>${title && renderTemplate`<p${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${unescapeHTML(title)}</p>`}${description && renderTemplate`<p${addAttribute(twMerge(
      "text-muted mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}</div></div>`
  )}</div>`}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/ui/Timeline.astro", void 0);

const $$Astro$4 = createAstro("https://secureathlete.net");
const $$Steps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Steps;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    image = await Astro2.slots.render("image"),
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-8 md:gap-12", { "md:flex-row-reverse": isReversed }, { "md:flex-row": image }], "class:list")}> <div${addAttribute(["md:py-4 md:self-center", { "md:basis-1/2": image }, { "w-full": !image }], "class:list")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-left rtl:text-right",
    title: "text-3xl lg:text-4xl",
    ...classes?.headline ?? {}
  } })} ${renderComponent($$result2, "Timeline", $$Timeline, { "items": items, "classes": classes?.items })} </div> ${image && renderTemplate`<div class="relative md:basis-1/2"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700", "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "width": 432, "height": 768, "layout": "cover", "src": image?.src, "alt": image?.alt || "" })}`} </div>`} </div> ` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/static/Steps.astro", void 0);

const $$Astro$3 = createAstro("https://secureathlete.net");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> ${image && renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "layout": "cover", "loading": "lazy", "decoding": "async" })} </a>`} </div> <h3 class="mb-2 text-xl font-bold leading-tight sm:text-2xl font-heading"> ${!APP_BLOG?.post?.isEnabled ? post.title : renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} class="hover:text-primary dark:hover:text-blue-700  transition ease-in duration-200"> ${post.title} </a>`} </h3> <p class="text-muted dark:text-slate-400 text-lg">${post.excerpt}</p> </article>`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/blog/GridItem.astro", void 0);

const $$Astro$2 = createAstro("https://secureathlete.net");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/blog/Grid.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://secureathlete.net", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/astrowind-template-in-depth.mdx": () => import('../astrowind-template-in-depth_5nnXyHqR.mjs'),"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('../get-started-website-with-astro-tailwind-css_CPaXxEHM.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('../how-to-customize-astrowind-to-your-brand_MAwfdSjH.mjs'),"/src/content/post/landing.md": () => import('../landing_BnbF94D9.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('../markdown-elements-demo-post_DgpojGz6.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('../useful-resources-to-create-websites_D06DFJNN.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"astrowind-template-in-depth":"/src/content/post/astrowind-template-in-depth.mdx","get-started-website-with-astro-tailwind-css":"/src/content/post/get-started-website-with-astro-tailwind-css.md","how-to-customize-astrowind-to-your-brand":"/src/content/post/how-to-customize-astrowind-to-your-brand.md","landing":"/src/content/post/landing.md","markdown-elements-demo-post":"/src/content/post/markdown-elements-demo-post.mdx","useful-resources-to-create-websites":"/src/content/post/useful-resources-to-create-websites.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/astrowind-template-in-depth.mdx": () => import('../astrowind-template-in-depth_CsbtX6Lp.mjs'),"/src/content/post/get-started-website-with-astro-tailwind-css.md": () => import('../get-started-website-with-astro-tailwind-css_BWexcJ7G.mjs'),"/src/content/post/how-to-customize-astrowind-to-your-brand.md": () => import('../how-to-customize-astrowind-to-your-brand_MtbXLY2W.mjs'),"/src/content/post/landing.md": () => import('../landing_CAvjEpzc.mjs'),"/src/content/post/markdown-elements-demo-post.mdx": () => import('../markdown-elements-demo-post_CYutSnRx.mjs'),"/src/content/post/useful-resources-to-create-websites.md": () => import('../useful-resources-to-create-websites_4MrWHO9T.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, "0");
  const month = String(publishDate.getMonth() + 1).padStart(2, "0");
  const day = String(publishDate.getDate()).padStart(2, "0");
  const hour = String(publishDate.getHours()).padStart(2, "0");
  const minute = String(publishDate.getMinutes()).padStart(2, "0");
  const second = String(publishDate.getSeconds()).padStart(2, "0");
  const permalink = POST_PERMALINK_PATTERN.replace("%slug%", slug).replace("%id%", id).replace("%category%", category || "").replace("%year%", year).replace("%month%", month).replace("%day%", day).replace("%hour%", hour).replace("%minute%", minute).replace("%second%", second);
  return permalink.split("/").map((el) => trimSlash(el)).filter((el) => !!el).join("/");
};
const getNormalizedPost = async (post) => {
  const { id, slug: rawSlug = "", data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();
  const {
    publishDate: rawPublishDate = /* @__PURE__ */ new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    metadata = {}
  } = data;
  const slug = cleanSlug(rawSlug);
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : void 0;
  const category = rawCategory ? cleanSlug(rawCategory) : void 0;
  const tags = rawTags.map((tag) => cleanSlug(tag));
  return {
    id,
    slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),
    publishDate,
    updateDate,
    title,
    excerpt,
    image,
    category,
    tags,
    author,
    draft,
    metadata,
    Content,
    // or 'content' in case you consume from API
    readingTime: remarkPluginFrontmatter?.readingTime
  };
};
const getRandomizedPosts = (array, num) => {
  const newArray = [];
  while (newArray.length < num && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return newArray;
};
const load = async function() {
  const posts = await getCollection("post");
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));
  const results = (await Promise.all(normalizedPosts)).sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()).filter((post) => !post.draft);
  return results;
};
let _posts;
const isBlogEnabled = APP_BLOG.isEnabled;
const isRelatedPostsEnabled = APP_BLOG.isRelatedPostsEnabled;
const isBlogListRouteEnabled = APP_BLOG.list.isEnabled;
const isBlogPostRouteEnabled = APP_BLOG.post.isEnabled;
const isBlogCategoryRouteEnabled = APP_BLOG.category.isEnabled;
const isBlogTagRouteEnabled = APP_BLOG.tag.isEnabled;
const blogListRobots = APP_BLOG.list.robots;
const blogPostRobots = APP_BLOG.post.robots;
const blogCategoryRobots = APP_BLOG.category.robots;
const blogTagRobots = APP_BLOG.tag.robots;
const blogPostsPerPage = APP_BLOG?.postsPerPage;
const fetchPosts = async () => {
  if (!_posts) {
    _posts = await load();
  }
  return _posts;
};
const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids))
    return [];
  const posts = await fetchPosts();
  return ids.reduce(function(r, id) {
    posts.some(function(post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
const findLatestPosts = async ({ count }) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(0, _count) : [];
};
const getStaticPathsBlogList = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogListRouteEnabled)
    return [];
  return paginate(await fetchPosts(), {
    params: { blog: BLOG_BASE || void 0 },
    pageSize: blogPostsPerPage
  });
};
const getStaticPathsBlogPost = async () => {
  if (!isBlogEnabled || !isBlogPostRouteEnabled)
    return [];
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      blog: post.permalink
    },
    props: { post }
  }));
};
const getStaticPathsBlogCategory = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogCategoryRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const categories = /* @__PURE__ */ new Set();
  posts.map((post) => {
    typeof post.category === "string" && categories.add(post.category.toLowerCase());
  });
  return Array.from(categories).flatMap(
    (category) => paginate(
      posts.filter((post) => typeof post.category === "string" && category === post.category.toLowerCase()),
      {
        params: { category, blog: CATEGORY_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { category }
      }
    )
  );
};
const getStaticPathsBlogTag = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogTagRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const tags = /* @__PURE__ */ new Set();
  posts.map((post) => {
    Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).flatMap(
    (tag) => paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
      {
        params: { tag, blog: TAG_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { tag }
      }
    )
  );
};
function getRelatedPosts(allPosts, currentSlug, currentTags) {
  if (!isBlogEnabled || !isRelatedPostsEnabled)
    return [];
  const relatedPosts = getRandomizedPosts(
    allPosts.filter((post) => post.slug !== currentSlug && post.tags?.some((tag) => currentTags.includes(tag))),
    APP_BLOG.relatedPostsCount
  );
  if (relatedPosts.length < APP_BLOG.relatedPostsCount) {
    const morePosts = getRandomizedPosts(
      allPosts.filter((post) => post.slug !== currentSlug && !post.tags?.some((tag) => currentTags.includes(tag))),
      APP_BLOG.relatedPostsCount - relatedPosts.length
    );
    relatedPosts.push(...morePosts);
  }
  return relatedPosts;
}

const $$Astro$1 = createAstro("https://secureathlete.net");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = APP_BLOG.isEnabled ? await findLatestPosts({ count }) : [];
  return renderTemplate`${APP_BLOG.isEnabled ? renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${APP_BLOG.list.isEnabled && linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText} »` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/components/static/BlogLatestPosts.astro", void 0);

const $$Astro = createAstro("https://secureathlete.net");
const $$Personal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Personal;
  const metadata = {
    title: "Personal Homepage Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "announcement": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "announcement" })}`, "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Hero", $$Hero, { "id": "hero", "title": "Sarah Johnson", "tagline": "Personal Web Demo", "actions": [{ variant: "primary", target: "_blank", text: "Hire me", href: "/" }] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
I'm a Graphic Designer passionate about crafting visual stories. ${maybeRenderHead()}<br> With 5 years of experience and a degree
      from New York University's School of Design. I infuse vitality into brands and designs, transforming concepts into
      captivating realities.
` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "id": "about", "columns": 3, "items": [
    {
      icon: "tabler:brand-dribbble",
      callToAction: {
        target: "_blank",
        text: "Dribbble",
        href: "#"
      }
    },
    {
      icon: "tabler:brand-behance",
      callToAction: {
        target: "_blank",
        text: "Behance",
        href: "#"
      }
    },
    {
      icon: "tabler:brand-pinterest",
      callToAction: {
        target: "_blank",
        text: "Pinterest",
        href: "#"
      }
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Colorful Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">About me</h3> <p>
Welcome to my creative journey. My work is a testament to my commitment to bringing ideas to life, where each
        pixel becomes a brushstroke in the canvas of imagination.
</p> <br> <p>
I find inspiration in the world around me, whether through the pages of a captivating novel, the intricate
        details of typography, or the vibrant hues of nature during my outdoor escapades.
</p> <br> <p>If you're curious to dive deeper into my work, you can follow me:</p> ` })}` })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "resume", "title": "Work experience", "items": [
    {
      title: 'Graphic Designer <br /> <span class="font-normal">ABC Design Studio, New York, NY</span> <br /> <span class="text-sm font-normal">2021 - Present</span>',
      description: `Collaborate with clients to understand design requirements and objectives. <br /> Develop branding solutions, including logos, color palettes, and brand guidelines. <br /> Design marketing materials such as brochures, posters, and digital assets. <br /> Create visually appealing user interfaces for websites and applications.`,
      icon: "tabler:briefcase"
    },
    {
      title: 'Junior Graphic Designer <br /> <span class="font-normal">XYZ Creative Agency, Los Angeles, CA</span> <br /> <span class="text-sm font-normal">2018 - 2021</span>',
      description: `Assisted senior designers in creating design concepts and visual assets. <br /> Contributed to the development of brand identities and marketing collateral. <br /> Collaborated with the marketing team to ensure consistent design across campaigns. <br /> Gained hands-on experience in various design software and tools.`,
      icon: "tabler:briefcase"
    }
  ], "classes": { container: "max-w-3xl" } })}  ${renderComponent($$result2, "Steps", $$Steps, { "id": "resume", "title": "Education", "items": [
    {
      title: `Master of Fine Arts in Graphic Design <br /> <span class="font-normal">New York University's School of Design</span> <br /> <span class="text-sm font-normal">2018 - 2020</span>`,
      icon: "tabler:school"
    },
    {
      title: `Bachelor of Arts in Graphic Design <br /> <span class="font-normal">New York University's School of Design</span> <br /> <span class="text-sm font-normal">2014 - 2018</span>`,
      icon: "tabler:school"
    }
  ], "classes": { container: "max-w-3xl" } })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Skills", "subtitle": "Discover the proficiencies that allow me to bring imagination to life through design.", "columns": 3, "defaultIcon": "tabler:point-filled", "items": [
    {
      title: "Graphic design",
      description: "Proficient in crafting visually appealing designs that convey messages effectively."
    },
    {
      title: "Branding and identity",
      description: "Skilled at developing cohesive brand identities, including logos and brand guidelines."
    },
    {
      title: "User-centered design",
      description: "Experienced in creating user-friendly interfaces and optimizing user experiences."
    },
    {
      title: "Adobe Creative Suite",
      description: "Skilled in using Photoshop, Illustrator, and InDesign to create and edit visual elements."
    },
    {
      title: "Typography",
      description: "Adept in selecting and manipulating typefaces to enhance design aesthetics."
    },
    {
      title: "Color theory",
      description: "Proficient in using color to evoke emotions and enhance visual harmony."
    },
    {
      title: "Print and digital design",
      description: "Knowledgeable in designing for both print materials and digital platforms."
    },
    {
      title: "Attention to detail",
      description: "Diligent in maintaining precision and quality in all design work."
    },
    {
      title: "Adaptability",
      description: "Quick to adapt to new design trends, technologies, and client preferences."
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "id": "porfolio", "title": "Elevating visual narratives", "subtitle": "Embark on a design journey that surpasses pixels, entering a realm of imagination. Explore my portfolio, where passion and creativity converge to shape enthralling visual narratives.", "isReversed": true, "items": [
    {
      title: "Description:",
      description: "Developed a comprehensive brand identity for a tech startup, Tech Innovators, specializing in disruptive innovations. The goal was to convey a modern yet approachable image that resonated with both corporate clients and tech enthusiasts."
    },
    {
      title: "Role:",
      description: "Led the entire branding process from concept to execution. Created a dynamic logo that symbolized innovation, selected a vibrant color palette, and I designed corporate stationery, website graphics, and social media assets."
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1658248165252-71e116af1b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
    alt: "Tech Design Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 1: <br><span class="text-2xl">Brand identity for tech innovators</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: 'Designed a captivating event poster for an art and music festival, "ArtWave Fusion," aiming to showcase the synergy between visual art and music genres.'
    },
    {
      title: "Role:",
      description: `Translated the festival's creative theme into a visually striking poster. Used bold typography, vibrant colors, and abstract elements to depict the fusion of art and music. Ensured the design captured the festival's vibrant atmosphere.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Art and Music Poster Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 2: <br><span class="text-2xl">Event poster for art & music festival</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: `Redesigned the e-commerce website for an eco-conscious fashion brand, GreenVogue. The objective was to align the brand's online presence with its sustainable ethos and improve user experience.`
    },
    {
      title: "Role:",
      description: `Conducted a thorough analysis of the brand's values and customer base to inform the design direction. Created a visually appealing interface with intuitive navigation, highlighting sustainable materials, and integrating a user-friendly shopping experience.`
    }
  ], "image": {
    src: "https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    alt: "Fashion e-commerce Image"
  }, "callToAction": {
    target: "_blank",
    text: "Go to the project",
    icon: "tabler:chevron-right",
    href: "#"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Project 3: <br><span class="text-2xl">E-commerce website redesign for fashion brand</span> </h3> ` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Client testimonials", "subtitle": "Discover what clients have to say about their experiences working with me.", "testimonials": [
    {
      testimonial: `She took our vague concept and turned it into a visual masterpiece that perfectly aligned with our goals. Her attention to detail and ability to translate ideas into compelling visuals exceeded our expectations.`,
      name: "Mark Thompson",
      job: "Creative director",
      image: {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Mark Thompson Image"
      }
    },
    {
      testimonial: `She transformed our brand identity with her creative finesse, capturing our essence in every element. Her dedication and talent truly shine through her work.`,
      name: "Emily Martinez",
      job: "CEO",
      image: {
        src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
        alt: "Emily Martinez Image"
      }
    },
    {
      testimonial: `She has an uncanny ability to communicate emotions and stories. She crafted a logo for our NGO that not only represents our cause but also evokes empathy. Her professionalism and commitment make her a designer of exceptional caliber.`,
      name: "Laura Simmons",
      job: "Founder of an NGO",
      image: {
        src: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Laura Simmons Image"
      }
    },
    {
      testimonial: `We entrusted Sarah with revamping our website's user interface, and the results were astounding. Her intuitive design sense enhanced user experience, leading to a significant increase in engagement. She's a designer who truly understands the synergy of aesthetics and functionality.`,
      name: "Alex Foster",
      job: "Director of web services",
      image: {
        src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Alex Foster Image"
      }
    },
    {
      testimonial: `She took our vision and elevated it beyond imagination. Her ability to capture brand essence and translate it into design is nothing short of remarkable. Working with her has been an inspiring journey.`,
      name: "Jessica Collins",
      job: "Product Manager",
      image: {
        src: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
        alt: "Jessica Collins Image"
      }
    },
    {
      testimonial: `Her ability to transform concepts into captivating visuals is nothing short of extraordinary. She took our event poster idea and turned it into a visual masterpiece that perfectly captured the essence of our festival. Sarah's dedication, creativity, and knack for delivering beyond expectations make her an invaluable asset to any project.`,
      name: "Michael Carter",
      job: "Event Coordinator",
      image: {
        src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Michael Carter Image"
      }
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Let's create together", "subtitle": "Ready to transform your vision into captivating designs?", "actions": [{
    variant: "primary",
    text: "Hire me",
    href: "/"
  }] })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Explore my insightful articles on my blog", "information": `Dive into a realm of design wisdom and creative inspiration, where you'll find invaluable insights, practical tips, and captivating narratives that elevate and enrich your creative journey.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "links": [
    { text: "Home", href: "#" },
    { text: "About", href: "#about" },
    { text: "Resume", href: "#resume" },
    { text: "Porfolio", href: "#porfolio" },
    { text: "Blog", href: "#blog" },
    { text: "Github", href: "https://github.com/onwidget" }
  ], "actions": [
    {
      text: "Hire me",
      href: "#"
    }
  ], "isSticky": true, "showToggleTheme": true })} ` })}` })}`;
}, "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/homes/personal.astro", void 0);

const $$file = "/Users/keithrobinson/Personal_Repos/POC_Secure_Athlete/src/pages/homes/personal.astro";
const $$url = "/homes/personal";

const personal = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Personal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Steps as $, $$BlogLatestPosts as a, blogCategoryRobots as b, getStaticPathsBlogTag as c, blogTagRobots as d, getStaticPathsBlogList as e, fetchPosts as f, getStaticPathsBlogCategory as g, blogListRobots as h, findPostsByIds as i, $$Grid as j, getRelatedPosts as k, getStaticPathsBlogPost as l, blogPostRobots as m, personal as p };
