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

    <label htmlFor="name">Nombre *</label>
    <input
        id="name"
        name="name"
        required
        type="text"
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    />
    <label htmlFor="email">E-mail *</label>
    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type="email" name="email" required />
    <label htmlFor="message">Mensaje *</label>
    <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="message" name="message" required></textarea>
    <button className="bg-lightBlu m-2 text-white rounded w-1/4 p-1 hover:bg-orange hover:text-dark" type="submit">Submit</button>
</form>
)


const contact = () => {
  return (
    <div className='w-4/5 m-auto md:w-3/5 my-10'>
      <div className='max-w-xl'>

        <h1>Coming soon!</h1>
        {ContactForm}
      </div>
    
    </div>
  )
}

export default contact