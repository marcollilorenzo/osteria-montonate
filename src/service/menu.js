import sanityClient from "../sanity"

export const getAllMenu = async() => {
    const res = await sanityClient.fetch(`*[_type=='category']| order(position){
      categoryName,
     "image": categoryImage.asset->url,
      dishes[]->{
        name,
        price,
        allergens[]->{
          name,
          "image": allergensImage.asset->url
        }
      }
    
    }
      `)
    return res
}

export const getSpeciality = async() => {
    const res = await sanityClient.fetch(`*[_type=='speciality'] | order(name){
      name,
  price,
  info,
          dishes

    }
      `)
    return res
}