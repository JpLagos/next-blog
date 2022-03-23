import React from 'react'

const ContactForm = (
    <form
    className='flex flex-col'
    name="contact-form"
    method="POST"
    action="contact/?success=true"
    data-netlify="true"
>
<input type="hidden" name="form-name" value="contact-form" />

    <label htmlFor="name">Name *</label>
    <input
        id="name"
        name="name"
        required
        type="text"
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    />
    <label htmlFor="company">Company *</label>
    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="company" name="company" required type="text" />
    <label htmlFor="email">E-mail Address *</label>
    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type="email" name="email" required />
    <label htmlFor="message">Message *</label>
    <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="message" name="message" required></textarea>
    <button className="bg-lightBlu m-2 text-white rounded" type="submit">Submit</button>
</form>
)


const contact = () => {
  return (
    <div>
        <h1>Contactame!</h1>
        {ContactForm}
    
    </div>
  )
}

export default contact