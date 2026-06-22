import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAreaBySlug, getAllAreaSlugs } from '@/lib/areas-data'
import Header from '@/components/header'
import AreaHero from '@/components/area/area-hero'
import AreaServices from '@/components/area/area-services'
import LocalBusinessSchema from '@/components/area/local-business-schema'
import BreadcrumbNav from '@/components/area/breadcrumb-nav'
import AreaFAQ from '@/components/area/area-faq'
import NearbyBranches from '@/components/area/nearby-branches'
import CTA from '@/components/cta'

export async function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = getAreaBySlug(slug)

  if (!area) {
    return {}
  }

  return {
    title: area.seoTitle,
    description: area.seoDescription,
    keywords: area.keywords,
    alternates: {
      canonical: `https://dsmgoldbuyers.com/areas/${area.slug}`,
    },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      type: 'website',
      url: `https://dsmgoldbuyers.com/areas/${area.slug}`,
    },
  }
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = getAreaBySlug(slug)

  if (!area) {
    notFound()
  }

  return (
    <>
      <Header />
      <LocalBusinessSchema area={area} />
      <main className="min-h-screen bg-background">
        <BreadcrumbNav areaName={area.area} />
        <AreaHero area={area} />
        <AreaServices area={area} />
        <NearbyBranches area={area} />
        <AreaFAQ area={area} />
        <CTA />
      </main>
    </>
  )
}
