import GenerateFormClient from "@/components/GenerateFormClient";
import WebTitle from "@/components/motion/WebTitle";

export default function GeneratePage() {
  return (
    <div className=" w-full ">
      <div className=" h-auto md:h-36  py-2 mx-auto flex-col w-full md:w-[60%] space-y-2 flex justify-center items-center text-center">
        <WebTitle title={'Generate Image'} variant={'large'} />
        <p className=" text-sm text-gray-500 font-medium">
        Welcome to imageAlx! Use our powerful AI image generator to bring your ideas to life. Describe the image you want, and let our AI turn your words into stunning, high-quality visuals in seconds. Whether it&apos;s for art, design, or just fun, the possibilities are endless.          </p>
      </div>
      <div className="  h-auto mt-10 md:mt-0 md:h-[68vh] w-full ">
        <GenerateFormClient />
      </div>
    </div>
  )
}
