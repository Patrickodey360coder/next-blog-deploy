import { storyblokEditable } from "@storyblok/react" 
import Image from "next/image"

const ImageSection = ({blok}) => {
  return (
    <section {...storyblokEditable(blok)} className="image-section">
    <div className="px-4">
      <div className="image-section-text">
        <h2 className="my-5 text-3xl text-white">{blok.headline}</h2>
        <p className="text-sm text-white lg:text-xl sm:px-16 xl:px-48 dark:text-white">{blok.lead}</p>
        {blok.button?.map(button => (
          <button className="my-8 px-5 py-3 rounded text-lg font-normal bg-white">{button.label}</button>
        ))}
      </div>
      <Image className="image-section-image backdrop-blur-sm bg-white/30" 
            src={blok.image.filename} 
            alt={blok.image.alt} 
            layout="fill"
      />
    </div>
    </section>
  )
}

export default ImageSection