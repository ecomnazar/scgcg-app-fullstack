import React from 'react';
import { Input } from '../../input'
import { SubmitHandler, useForm } from 'react-hook-form';
import { signinApi } from '@/shared/api/signinApi';
import { BaseContext } from '@/app/providers/useContextProvider';
import toast from 'react-hot-toast';
import { Button } from '../../button';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation()

    const onSubmit: SubmitHandler<FormProps> = async ({ email, password }) => {
        setLoading(true)
        const data = {
            email,
            password
        }
        await signinApi(data)
            .then(() => {
                setAuthModal(false)
                toast.success(t('successfullyLoggedIn'))
            })
            .finally(() => setLoading(false))
            .catch(() => console.log('error'))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 animate-fadeIn'>
            <Input placeholder={t('email')} register={register('email', { required: t('requiredField') })} />
            <Input placeholder={t('password')} register={register('password', { required: t('mustHave6Character'), minLength: { value: 6, message: t('mustHave6Character') } })} error={errors.password} />
            <Button title={t('signin')} type='submit' size='small' className='w-full' loading={loading} />
            <p className='text-[13px] text-center'>{t('dontHaveAnAccount')} <button onClick={() => setAuthectionType('signup')} className='text-primary'>{t('signup')}</button></p>
        </form>
    )
}
