import React from 'react';
import { Input } from '../../input'
import { SubmitHandler, useForm } from 'react-hook-form';
import { signinApi } from '@/shared/api/signinApi';
import { BaseContext } from '@/app/providers/useContextProvider';
import toast from 'react-hot-toast';
import { Button } from '../../button';

interface FormProps {
    email: string;
    password: string;
}

interface Props {
    setAuthectionType: React.Dispatch<React.SetStateAction<"signin" | "signup">>
}

export const SignInForm: React.FC<Props> = ({ setAuthectionType }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()
    const { setAuthModal } = React.useContext(BaseContext)
    const [loading, setLoading] = React.useState(false)

    const onSubmit: SubmitHandler<FormProps> = async ({ email, password }) => {
        setLoading(true)
        const data = {
            email,
            password
        }
        await signinApi(data)
            .then(() => {
                setAuthModal(false)
                toast.success('Registered successfully')
            })
            .finally(() => setLoading(false))
            .catch(() => console.log('error'))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 animate-fadeIn'>
            <Input placeholder='Email' register={register('email', { required: 'Required field' })} />
            <Input placeholder='Password' register={register('password', { required: 'Name must be 6 char', minLength: { value: 6, message: 'Password must be 6 char' } })} error={errors.password} />
            <Button title={'Sign in'} type='submit' size='small' className='w-full' loading={loading} />
            <p className='text-[13px] text-center'>Don't have an account? <button onClick={() => setAuthectionType('signup')} className='text-primary'>Sign up</button></p>
        </form>
    )
}
