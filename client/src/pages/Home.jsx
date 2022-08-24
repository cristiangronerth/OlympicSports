import React from 'react'
import BarDivider from '../components/Home/BarDivider/BarDivider'
import Categories from '../components/Home/Categories/Categories'
import Collections from '../components/Home/Collections/Collections'
import PreInfo from '../components/Home/PreInfo/PreInfo'
import Testimonials from '../components/Home/Testimonials/Testimonials'

export default function Home() {


  return (
    <>
        <Collections/>
        <BarDivider/>
        <PreInfo/>
        <Categories/>
        <Testimonials/>
    </>
  )
}
