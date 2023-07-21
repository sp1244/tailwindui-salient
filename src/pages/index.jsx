import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Stat } from '@/components/Stat'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Card } from '@/components/Card'

export default function Home() {
  return (
    <>
      <Hero />
      <Card />
      <Stat />
      <Faqs />
    </>
  )
}
