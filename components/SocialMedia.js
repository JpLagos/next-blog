import React from 'react'
import Link from 'next/link'
import Script from 'next/script'

const SocialMedia = ({md}) => {
    const classes = `${md} gap-x-7 lg:flex lg:py-2`
  return (
    <div className={classes}>

     <a target="blank" href="https://www.instagram.com/j_lag0s/" className="cursor-pointer">
        <ion-icon class="w-7 h-7 hover:text-lightBlu" name="logo-instagram"></ion-icon>
    </a>

    <a target="blank" href="https://github.com/jacketlh" className="cursor-pointer">
        <ion-icon class="w-7 h-7 hover:text-lightBlu" name="logo-github"></ion-icon>
    </a>

    <a target="blank" href="https://www.linkedin.com/in/juan-lagos-huerta-34b4a21b8/" className="cursor-pointer">
        {/* iconos anteriores <svg
            class="w-6 h-6 text-blue-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
        </svg> */}
        <ion-icon class="w-7 h-7 hover:text-lightBlu" name="logo-linkedin"></ion-icon>
    </a>

    <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
    <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
</div>

  )
}


export default SocialMedia

