
export const handleDownload = async ({ imageName, imageUrl }: { imageUrl: string, imageName: string }) => {
    const imageBlob = await fetch(imageUrl)
        .then((res) => res.arrayBuffer())
        .then((buffer) => new Blob([buffer], { type: 'image/jpeg' }))

    console.log('blob', imageBlob)
    const link = document.createElement('a');
    link.href = URL.createObjectURL(imageBlob);
    console.log('link href', URL.createObjectURL(imageBlob))
    link.download = imageName.trim().split(' ').join('-');
    link.click();
}