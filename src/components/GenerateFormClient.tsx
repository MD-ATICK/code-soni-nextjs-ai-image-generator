"use client"
import { handleDownload } from '@/utils/HandleDownload'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BeatLoader, MoonLoader } from 'react-spinners'
import { toast } from 'sonner'
import z from 'zod'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'

export default function GenerateClient() {


    const [generatedImage, setGeneratedImage] = useState<{ imageUrl: string, imageName: string } | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const generateFormSchema = z.object({
        prompt: z.string().min(1).max(60).nonempty('field is required!')
    })

    const form = useForm<z.infer<typeof generateFormSchema>>({
        resolver: zodResolver(generateFormSchema),
        defaultValues: { prompt: '' }
    })


    const onsubmit = async (values: z.infer<typeof generateFormSchema>) => {
        try {
            setIsLoading(true)
            const response = await fetch(`/api/image`, {
                method: 'POST',
                body: JSON.stringify(values)
            })
            const data = await response.json()
            if (response.status === 401) {
                toast(data?.error || 'Something is round!')
                return;
            }
            setGeneratedImage({ imageUrl: data?.url, imageName: data?.prompt })
        } catch (err) {
            console.log(err)
            toast('Something is wrong!')
        } finally {
            setTimeout(() => {
                form.reset()
                setIsLoading(false)
            }, 1000);
        }
    }


    return (
        <div className="flex flex-col md:flex-row items-center px-[2vw] container mx-auto h-full">

            {/* FORM CONTENT */}
            <div className=" w-full h-full pb-10 md:p-6  border-blue-500 md:max-w-[60%]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onsubmit)} className='  space-y-6'>
                        <FormField
                            control={form.control}
                            name='prompt'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} type='text' className='  text-sm font-medium' placeholder='generate your own choose search ...' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button disabled={isLoading} type='submit' className=' w-full text-white hover:opacity-85 bg-gradient-to-r from-pink-700 via-purple-600 to-blue-700' >
                            {
                                isLoading ? <BeatLoader color='white' />
                                    : 'Generate'
                            }
                        </Button>
                    </form>
                </Form>
            </div>

            {/* IMAGE CONTENT */}
            <div className=' w-full md:max-w-[40%] h-full  pb-20 px-2 flex justify-center items-center'>
                {!generatedImage &&
                    <p className=' text-sm cursor-pointer text-gray-400'>generate a image!</p>
                }
                {
                    generatedImage &&
                    <div className=" w-full relative aspect-square md:h-full group">
                        <Image src={generatedImage.imageUrl} alt={generatedImage.imageName} title={generatedImage.imageName} sizes='400px' fill className=' z-20 object-cover shadow-lg rounded-2xl ' />
                        <div className=' absolute h-full w-full flex z-0 justify-center shadow-lg items-center bg-gray-900 rounded-2xl'>
                            <MoonLoader color='white' />
                        </div>
                        <Button disabled={!generatedImage} onClick={() => handleDownload({ imageName: generatedImage.imageName, imageUrl: generatedImage.imageUrl })} className=' -bottom-14 hover:opacity-85 absolute w-full text-white bg-gradient-to-r from-pink-700 via-purple-600 to-blue-700' >Download</Button>
                    </div>
                }
            </div>
        </div>
    )
}
