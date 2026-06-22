'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbNavProps {
  areaName: string
}

export default function BreadcrumbNav({ areaName }: BreadcrumbNavProps) {
  return (
    <nav className="bg-accent/30 border-b border-accent px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <Link href="/#areas" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          Branches
        </Link>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <span className="text-foreground">{areaName}</span>
      </div>
    </nav>
  )
}
