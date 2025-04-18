import ImagePreviewer from "../portfolio/imagePreviewer";
import LinkOverLogo from "../linkOverLogo";

function Magazine({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="h-[1px] w-full bg-gray-300 mt-8"></div>
      <h1 className="text-lightText text-center font-palatino text-[20px] lg:tracking-[5px] tracking-[3px] py-8">
        GALLERY
      </h1>
      {/* magazine */}
      <ImagePreviewer images={images} />

      <div className="my-8">
        <LinkOverLogo link="/portfolio" linkHeader="OUR PORTFOLIO" />
      </div>
    </div>
  );
}

export default Magazine;
