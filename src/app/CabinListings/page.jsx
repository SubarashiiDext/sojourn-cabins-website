"use client"
import Link from 'next/link'
import React from 'react'
import LocationA from './Location/LocationA/page'



export default function CabinListings({children}) {
  return (
    <div>{children}
      <Link href="/LocationA" className='p-2 bg-blue-500 rounded'>Location</Link>
    </div>
  )
}
