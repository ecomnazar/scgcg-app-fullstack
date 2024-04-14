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
import { useTranslation } from 'react-i18next';

interface FormProps {
    fullname: string;
    email: string;
    password: string;
    birthday: string;
}

interface Props {
    setAuthectionType: React.Dispatch<React.SetStateAction<"signin" | "signup">>
}

export const SignUpForm: React.FC<Props> = ({ setAuthectionType }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormProps>()
    const { setAuthModal } = React.useContext(BaseContext)
    const [loading, setLoading] = React.useState(false)
    const [selectedCountry, setSelectedCountry] = React.useState('')
    const [selectedRegion, setSelectedRegion] = React.useState('')
    const [selectedGender, setSelectedGender] = React.useState('')
    const dateInputRef = React.useRef<HTMLInputElement>(null)
    const { t } = useTranslation()

    const onSubmit: SubmitHandler<FormProps> = async ({ fullname, email, password }) => {
        if (selectedCountry === 'Turkmenistan' && !selectedRegion) {
            toast.error(t('selectRegion'))
            return
        }
        if (!selectedCountry) {
            toast.error(t('selectCountry'))
            return
        }
        if (!selectedGender) {
            toast.error(t('selectGender'))
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
                toast.success(t('successfullyRegistered'))
            })
            .finally(() => setLoading(false))
            .catch(() => console.log('error'))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 animate-fadeIn'>
            <Input placeholder={t('fullname')} register={register('fullname', { required: t('mustHave6Character'), minLength: { value: 3, message: t('mustHave6Character') } })} error={errors.fullname} />
            <Input placeholder={t('email')} register={register('email', { required: t('requiredField') })} error={errors.email} />
            <Input placeholder={t('password')} register={register('password', { required: t('mustHave6Character'), minLength: { value: 6, message: t('mustHave6Character') } })} error={errors.password} />
            <Input onClick={() => dateInputRef.current?.showPicker()} register={register('birthday')} placeholder={t('birthday')} />
            <input ref={dateInputRef} className='absolute invisible' type='date' onChange={(e) => setValue('birthday', e.target.value)} />
            <Select content={countries} defaultValue={t('selectCountry')} selected={selectedCountry} setSelected={setSelectedCountry} />
            {selectedCountry === 'Turkmenistan' && <Select content={regions} defaultValue={t('selectRegion')} selected={selectedRegion} setSelected={setSelectedRegion} />}
            <Select content={genders} defaultValue={t('selectGender')} selected={selectedGender} setSelected={setSelectedGender} />
            <Button title={t('signup')} type={'submit'} size='small' className='w-full' loading={loading} />
            <p className='text-[13px] text-center'>{t('alreadyHaveAnAccount')} <button onClick={() => setAuthectionType('signin')} className='text-primary'>{t('signin')}</button></p>
        </form>
    )
}
