"use client";
import { useParams } from 'next/navigation';
import React from 'react'

const BlogSlug = () => {
  const param = useParams();
  return (
    <div className='container'>BlogSlug {param.slug}</div>
  )
}

export default BlogSlug