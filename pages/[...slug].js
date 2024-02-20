import Head from "next/head";
import Layout from "../components/Layout";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story, preview }) {
  story = useStoryblokState(story);

  return (
    <div >
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content}/>
    </div>
  );
}

export async function getStaticProps({ params, preview }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version:  preview? "draft" : "published",
    resolve_links: 'url',
  };

  const storyblokApi = getStoryblokApi();

  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get(`cdn/stories/config`);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
      preview: preview || false,
    },

    revalidate: 3600,
  };
}
export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/" ,{
    version: 'published'
  });

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    
    paths.push({ params: { slug: splittedSlug } });
  });
  
  return {
    paths: paths,
    fallback: false,
  };
}