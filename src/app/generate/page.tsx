import GenerateFormClient from "@/components/GenerateFormClient";
import WebTitle from "@/components/motion/WebTitle";

export default function GeneratePage() {
  return (
    <main className=" w-full ">
      <div className=" h-auto md:h-36  py-2 mx-auto flex-col w-full md:w-[60%] space-y-2 flex justify-center items-center text-center">
        <WebTitle title={'Generate Image'} variant={'large'} />
        <p className=" text-sm text-gray-500 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nobis delectus iure veniam necessitatibus facere.</p>
      </div>
      <div className="  h-auto mt-10 md:mt-0 md:h-[68vh] w-full ">
        <GenerateFormClient />
      </div>
    </main>
  )
}
