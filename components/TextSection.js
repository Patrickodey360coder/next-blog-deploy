import { storyblokEditable } from "@storyblok/react";

const TextSection = ({blok}) => {
  return (
    <section className="p-15 text-center bg-white" {...storyblokEditable(blok)}>
      <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h2 className="my-5 text-3xl">{blok.headline}</h2>
        <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{blok.lead}</p>
        <div className="button">
          {blok.button?.map(button => (
            <button className=" dark:bg-gray-900 my-8 px-5 py-3 rounded text-lg font-normal text-gray-100">{button.label}</button>
          ))}
        </div>
      </div>
    </section>
    );
  };

export default TextSection;
