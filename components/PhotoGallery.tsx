'use client'

import { useRef } from 'react'

interface Photo {
  id: number
  src: string
  alt: string
  caption?: string
}

// Replace these with your actual photos in the public folder
const photos: Photo[] = [
  { id: 1, src: '/photos/photo1.jpg', alt: 'Photo 1', caption: 'Project Work' },
  { id: 2, src: '/photos/photo2.jpg', alt: 'Photo 2', caption: 'Coding Session' },
  { id: 3, src: '/photos/photo3.jpg', alt: 'Photo 3', caption: 'Learning' },
  { id: 4, src: '/photos/photo4.jpg', alt: 'Photo 4', caption: 'Team Work' },
  { id: 5, src: '/photos/photo5.jpg', alt: 'Photo 5', caption: 'Achievement' },
  { id: 6, src: '/photos/photo6.jpg', alt: 'Photo 6', caption: 'Event' },
]

export default function PhotoGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="gallery" className="py-32 bg-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8 reveal">
          <div>
            <p className="text-amber-500 uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Gallery
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Photo <span className="font-bold">Moments</span>
            </h2>
          </div>
          
          {/* Scroll Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-neutral-700 hover:border-amber-500 text-neutral-400 hover:text-amber-500 transition-all flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-neutral-700 hover:border-amber-500 text-neutral-400 hover:text-amber-500 transition-all flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Left spacer for centering on large screens */}
        <div className="hidden lg:block shrink-0 w-[calc((100vw-1280px)/2)]" />
        
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="group shrink-0 reveal"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative w-72 md:w-80 lg:w-96 aspect-[4/5] bg-neutral-800 overflow-hidden">
              {/* Photo */}
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                {/* Placeholder - replace with actual image */}
                <div className="text-center text-neutral-600">
                  <div className="text-6xl mb-2">📷</div>
                  <p className="text-sm">Add photo to</p>
                  <p className="text-xs text-neutral-500">/public/photos/photo{photo.id}.jpg</p>
                </div>
                {/* Uncomment below when you add real photos */}
                {/* <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{photo.caption}</p>
                <p className="text-neutral-400 text-sm">Photo {photo.id}</p>
              </div>
              
              {/* Frame corners */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-amber-500/0 group-hover:border-amber-500 transition-colors duration-300" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-amber-500/0 group-hover:border-amber-500 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-amber-500/0 group-hover:border-amber-500 transition-colors duration-300" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-amber-500/0 group-hover:border-amber-500 transition-colors duration-300" />
            </div>
          </div>
        ))}
        
        {/* Right spacer */}
        <div className="hidden lg:block shrink-0 w-[calc((100vw-1280px)/2)]" />
      </div>

      {/* Scroll hint */}
      <div className="mt-8 text-center">
        <p className="text-neutral-600 text-sm">
          ← Scroll or use arrows to see more →
        </p>
      </div>
    </section>
  )
}
