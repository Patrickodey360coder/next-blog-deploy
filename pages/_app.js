import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import TextSection from "../components/TextSection";
import MenuLink from "../components/MenuLink";
import Config from "../components/Config";
import HeaderMenu from "../components/HeaderMenu";
import Layout from "../components/Layout";
import Article from "../components/Article";
import AllArticles from "../components/AllArticles";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  textsection: TextSection,
  config: Config,
  "header_menu": HeaderMenu,
  "menu_link": MenuLink,
  layout: Layout,
  article: Article,
  all_articles: AllArticles
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return(
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
     </Layout>
  );
}

export default MyApp;
