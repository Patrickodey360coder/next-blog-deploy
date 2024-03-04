import Head from 'next/head';

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react';

export default function Home({ story}) {
  story = useStoryblokState(story);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({preview}) {

  let slug = 'home';

  let sbParams = {
    version: preview ? 'draft' : 'published',
    resolve_links: 'url',
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get('cdn/stories/config');

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
