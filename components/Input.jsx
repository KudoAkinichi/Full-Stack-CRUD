import React from 'react'

const Input = ({item, setForm, form}) => {
    const { label, type, name} = item;

    const handleonchange = (e) => {
        return setForm({...form, [e.target.name]: e.target.value})
    }
  return (
    <div className='flex flex-col gap-2'>
        <label className='text-sm pt-2'>{label}</label>
        <input 
        type={type} 
        name={name} 
        placeholder={`${name}...`}
        onChange={handleonchange} 
        className='p-3 bg-white/20 outline-none text-sm rounded-sm' />
    </div>
  )
}

export default Input