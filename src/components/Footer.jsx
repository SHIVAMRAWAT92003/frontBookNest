import React from 'react'

const Footer = () => {
  return (
    <div>
        <hr />
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a href='/about' className="link link-hover">About us</a>
    <a href='/contact' className="link link-hover">Contact</a>
    <a href='/course' className="link link-hover">Course</a>
  
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
    <a href="https://github.com/Shivam92003" target="_blank" rel="noopener noreferrer">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path
      d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577v-2.042c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.305 3.492.997.108-.775.419-1.306.762-1.606-2.665-.305-5.466-1.333-5.466-5.931 0-1.311.469-2.382 1.236-3.221-.123-.305-.536-1.527.117-3.181 0 0 1.008-.322 3.3 1.23a11.522 11.522 0 0 1 3.003-.403 11.52 11.52 0 0 1 3.003.403c2.292-1.552 3.3-1.23 3.3-1.23.653 1.654.24 2.876.117 3.181.768.839 1.236 1.91 1.236 3.221 0 4.61-2.805 5.623-5.475 5.921.43.37.814 1.102.814 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z"
    />
  </svg>
</a>

      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/shivamrawat911" target="_blank" rel="noopener noreferrer">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path
      d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.73V1.73C24 .774 23.208 0 22.23 0zM7.09 20.452H3.537V9.035H7.09v11.417zM5.313 7.679a2.06 2.06 0 1 1 0-4.118 2.06 2.06 0 0 1 0 4.118zM20.452 20.452h-3.553V14.88c0-1.328-.026-3.04-1.854-3.04-1.854 0-2.14 1.448-2.14 2.94v5.672H9.352V9.035h3.41v1.562h.049c.474-.897 1.635-1.84 3.366-1.84 3.6 0 4.267 2.37 4.267 5.455v6.24z"
    />
  </svg>
</a>

    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} Shivam Rawat</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
