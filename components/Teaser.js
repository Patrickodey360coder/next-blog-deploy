import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <>
      <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>{blok.headline}</h2>
      <div className="img">
        <img src={blok.image.filename} alt={blok.image.alt} />
      </div>
    </>
  )
};

export default Teaser;
