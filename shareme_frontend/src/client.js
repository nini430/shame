import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"


export const client=sanityClient({
    projectId:"qaaqsdpg",
    dataset:"production",
    apiVersion:"2022-08-25",
    useCdn:true,
    token:"skJI1sdDnkKEGI9sSX0c5Rnuc3DGK5u86rbq9KzKEXDi0BsLXLzLGMEOohykPnvMTH9YrQ7wOUVamxPcn08AzoD7DWImMnIeakXPAEU5GqZc2tWRxUPO1y9eHW7z6MFIOQ2zot4mcAl5XuYrrMTAlszLY58IsWVYUlgRShdOYdWkAWZSBDnN"
})


const builder=imageUrlBuilder(client);

export const urlFor=source=>builder.image(source);

