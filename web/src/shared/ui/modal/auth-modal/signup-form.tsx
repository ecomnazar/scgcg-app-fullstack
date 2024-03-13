import React from 'react';
import toast from 'react-hot-toast';
import { Input } from '../../input'
import { SubmitHandler, useForm } from 'react-hook-form';
import { signupApi } from '@/shared/api/signupApi';
import { Button } from '../../button';
import { BaseContext } from '@/app/providers/useContextProvider';
import { Select } from '../../select';
import { countries } from '@/shared/lib/constants/countries';
import { genders } from '@/shared/lib/constants/genders';
import { regions } from '@/shared/lib/constants/regions';

interface FormProps {
    fullname: string;
    email: string;
    password: string;
}

interface Props {
    setAuthectionType: React.Dispatch<React.SetStateAction<"signin" | "signup">>
}

export const SignUpForm: React.FC<Props> = ({ setAuthectionType }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()
    const { setAuthModal } = React.useContext(BaseContext)
    const [loading, setLoading] = React.useState(false)
    const [selectedCountry, setSelectedCountry] = React.useState('')
    const [selectedRegion, setSelectedRegion] = React.useState('')
    const [selectedGender, setSelectedGender] = React.useState('')

    const onSubmit: SubmitHandler<FormProps> = async ({ fullname, email, password }) => {
        if (selectedCountry === 'Turkmenistan' && !selectedRegion) {
            toast.error('Please select a region')
            return
        }
        if (!selectedCountry) {
            toast.error('Please select a country')
            return
        }
        if (!selectedGender) {
            toast.error('Please select a gender')
            return
        }
        setLoading(true)
        const data = {
            fullname,
            email,
            password,
            region: selectedCountry === 'Turkmenistan' ? selectedRegion : selectedCountry,
            gender: selectedGender
        }
        await signupApi(data)
            .then(() => {
                setAuthModal(false)
                toast.success('Registered successfully')
            })
            .finally(() => setLoading(false))
            .catch(() => console.log('error'))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 animate-fadeIn'>
            <Input placeholder='Fullname' register={register('fullname', { required: 'Name must be 3 char', minLength: { value: 3, message: 'Name must be 3 char' } })} error={errors.fullname} />
            <Input placeholder='Email' register={register('email', { required: 'Required field' })} error={errors.email} />
            <Input placeholder='Password' register={register('password', { required: 'Name must be 6 char', minLength: { value: 6, message: 'Password must be 6 char' } })} error={errors.password} />
            <Select content={countries} defaultValue='Select country' selected={selectedCountry} setSelected={setSelectedCountry} />
            {selectedCountry === 'Turkmenistan' && <Select content={regions} defaultValue='Select region' selected={selectedRegion} setSelected={setSelectedRegion} />}
            <Select content={genders} defaultValue='Select gender' selected={selectedGender} setSelected={setSelectedGender} />
            <Button title={'Sign up'} type={'submit'} size='small' className='w-full' loading={loading} />
            <p className='text-[13px] text-center'>Already have an account? <button onClick={() => setAuthectionType('signin')} className='text-primary'>Sign in</button></p>
        </form>
    )
}
