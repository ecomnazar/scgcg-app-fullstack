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

export const SignInForm: React.FC<Props> = ({ setAuthectionType }) => {
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
            <Input placeholder='Email' register={register('email')} />
            <Input placeholder='Password' register={register('password')} />
            <button type='submit' className='text-[14px] bg-primary text-white w-full rounded-[8px] h-[42px]'>Sign in</button>
            <p className='text-[13px] text-center'>Don't have an account? <button onClick={() => setAuthectionType('signup')} className='text-primary'>Sign up</button></p>
        </form>
    )
}
