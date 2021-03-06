import NextHead from 'next/head'
import React from 'react'

/**
 * Prop Types
 */
export interface MetaProps {
  description?: string
  image?: string
  title: string
  type?: string
}

/**
 * Component
 */
export const Head = ({
  customMeta,
}: {
  customMeta?: MetaProps
}): JSX.Element => {
  const meta: MetaProps = {
    title: 'Solos | Horizons by Johnny Defeo',
    type: 'website',
    description: 'Scenes which could be omens, dreamy premonitions, or stolen glances of the inevitable...',
    ...customMeta,
  }

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Solos | Horizons by Johnny Defeo" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </NextHead>
  )
}
