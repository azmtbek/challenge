import React from 'react'
import Card from '../components/MainCCard'

export default function MainCategories() {
  return (
    <div className="flex flex-nowrap gap-2 m-3 md:m-32 overflow-x-scroll">
    <Card src="woman-1.png" text="Outer" />
    <Card src="woman-2.png" text="Top" />
    <Card src="woman-3.png" text="Skirt" />
    <Card src="woman-4.png" text="Pants" />
    <Card src="woman-5.png" text="Accesories" />
    </div>
  )
}
