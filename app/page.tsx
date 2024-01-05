'use client'
import { ChildTemplate, ParentTemplate } from '@/components/atoms/template'
import { RegisterForm } from '@/components/molecules/form'
import { CardLists, CardListsSkeleton } from '@/components/organisms/cardLists'
import { IProducts } from '@/lib/types'
import { useEffect, useState } from 'react'

export default function Home() {
  const threeProducts:IProducts = [
    {
    _id:"64057e49aafc2434e58a9482",
    __v:3,
    user:"nah",
    name:"na",
    brand:'brand',
    category:"carta",
    rating:4,
    numReviews:4,
    threeValue:3,
    price:300,
    countInStock:4,
    review:"review",
    createAt:"date",
    updatedt:"date",
    description:"descripotn"
  },
  {
    _id:"64057e49aafc2434e58a9486",
    __v:3,
    user:"nah",
    name:"na",
    brand:'brand',
    category:"carta",
    rating:4,
    numReviews:4,
    threeValue:3,
    price:300,
    countInStock:4,
    review:"review",
    createAt:"date",
    updatedt:"date",
    description:"descripotn"
  },
  {
    _id:"64057e49aafc2434e58a9483",
    __v:3,
    user:"nah",
    name:"na",
    brand:'brand',
    category:"carta",
    rating:4,
    numReviews:4,
    threeValue:3,
    price:300,
    countInStock:4,
    review:"review",
    createAt:"date",
    updatedt:"date",
    description:"descripotn"
  },
]
  const [isLoading , setIsLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div className="flex justify-center items-center ">
      <RegisterForm  onSubmit={()=>{}}  handleSubmit={()=>{}}/>
    </div>
      <ParentTemplate size='s'>
      <ChildTemplate position='bottomRight' size='s'>
        {isLoading ? (
          <CardListsSkeleton />
        ) : (
          <CardLists products={threeProducts} />
        )}
      </ChildTemplate>
    </ParentTemplate>


    </main>
  )
}
