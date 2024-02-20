import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const TextSection = ({blok}) => {
  return (
    <section className="p-10" {...storyblokEditable(blok)}>
      <div className="container">
        <h1 className="my-5">{blok.headline}</h1>
        <p>{blok.lead}</p>
        <div>
          <p>{render(blok?.text)}</p>
        </div>
        <button>{blok.button?.map(button => (
          button.label
        ))}</button>
      </div>
    </section>
    );
  };

export default TextSection;
