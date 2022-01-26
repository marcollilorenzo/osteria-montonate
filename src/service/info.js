import sanityClient from "../sanity"

export const getInfo = async() => {
    const res = await sanityClient.fetch(`*[_type=='info']{
        hours
        }
      `)
    return res
}