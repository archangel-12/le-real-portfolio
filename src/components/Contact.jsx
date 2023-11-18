import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#080e18] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/01e4a039-bfe9-4f77-b09f-cc5d343d05c9" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>yeah, maybe</p>
            </div>
            <input className='bg-[#080e18] p-2 text-gray-50' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#080e18] text-gray-50' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#080e18] p-2 text-gray-50' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>um, thanks :)</button>
        </form>
    </div>
  )
}

export default Contact