import React from 'react';
import { Input } from '../../input'
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormProps {
    fullname: string;
    email: string;
    password: string;
}

interface Props {
    setAuthectionType: React.Dispatch<React.SetStateAction<"signin" | "signup">>
}

export const SignUpForm: React.FC<Props> = ({ setAuthectionType }) => {
    const { register, handleSubmit } = useForm<FormProps>()

    const onSubmit: SubmitHandler<FormProps> = ({ fullname, email, password }) => {
        const data = {
            fullname,
            email,
            password
        }
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 animate-fadeIn'>
            <Input placeholder='Fullname' register={register('fullname')} />
            <Input placeholder='Email' register={register('email')} />
            <Input placeholder='Password' register={register('password')} />
            <Input placeholder='Country' />
            <Input placeholder='Gender' />
            <button type='submit' className='text-[14px] bg-primary text-white w-full rounded-[8px] h-[42px]'>Sign up</button>
            <p className='text-[13px] text-center'>Already have an account? <button onClick={() => setAuthectionType('signin')} className='text-primary'>Sign in</button></p>
        </form>
    )
}
