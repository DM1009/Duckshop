import ImageLoop from '@/components/imageLoop'
import { Layout } from '@/components/layout'
import React from 'react'

export default function index(): JSX.Element {
  return (
    <Layout>
      <div>
        <ImageLoop />
      </div>
    </Layout>
  )
}
