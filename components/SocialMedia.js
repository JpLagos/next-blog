import React from 'react'
import Script from 'next/script'
const SocialMedia = ({md}) => {
    const classes = `${md} gap-x-7 lg:flex lg:py-2`
  return (
    <div className={classes}>
        <a target="blank" href="https://www.instagram.com" className="cursor-pointer">
            <ion-icon class="w-7 h-7 hover:text-lightBlu" name="logo-instagram"></ion-icon>
        </a>
        <a target="blank" href="https://github.com" className="cursor-pointer">
            <ion-icon class="w-7 h-7 hover:text-lightBlu" name="logo-github"></ion-icon>
        </a>
        <a target="blank" href="https://www.linkedin.com" className="cursor-pointer">
            <ion-icon class="w-7 h-7 hover:text-lightBlu" name="logo-linkedin"></ion-icon>
        </a>

        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </div>  
  )
}
export default SocialMedia

