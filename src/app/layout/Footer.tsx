import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
        className='w-full bg-[hsl(var(--secondary))] flex flex-row justify-center p-3 2xl:p-10'
    >
        <div>
            <h3
                className='lg:text-lg 2xl:text-2xl'
            >&copy; {year} Victor DSG</h3>
        </div>
    </footer>
  )
}
