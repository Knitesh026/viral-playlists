import * as React from 'react'
import { Button } from '@/components/ui/button'

export function Cta({ cta }) {
  if (!cta || !cta.ctaEnabled) return null

  const handleClick = (e) => {
    if (cta.onClick) {
      e.preventDefault()
      cta.onClick(e)
    }
  }

  return (
    <Button
      variant={cta.variant || 'default'}
      size={cta.size || 'default'}
      onClick={handleClick}
      asChild={!!cta.link && !cta.onClick}
      className="font-semibold shadow-md rounded-full px-6"
    >
      {cta.link && !cta.onClick ? (
        <a href={cta.link} target={cta.target || '_self'} rel="noopener noreferrer">
          {cta.text}
        </a>
      ) : (
        <span>{cta.text}</span>
      )}
    </Button>
  )
}
