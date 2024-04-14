import clsx from "clsx";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

// 50 accent of color to shadow on focus
// 300 accent of color to border on focus

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    placeholder?: string;
    error?: FieldError;
    register?: UseFormRegisterReturn<string>;
    type?: 'text' | 'password' | 'date';
}

export const Input: React.FC<Props> = ({ className, placeholder, error, register, type = 'text', ...props }) => {
    return (
        <div className='space-y-1'>
            <input
                {...props}
                {...register}
                type={type}
                placeholder={placeholder}
                className={clsx('border border-[#D0D5DD] outline-none placeholder:text-[#a6aebe] text-[#101828] placeholder:text-dark/50 w-full h-[42px] px-[14px] focus:border-primary-300 focus:shadow-[0_0px_1px_3px_#eee8ff] text-[14px] rounded-[8px]', className)} />
            {error?.message && <span className='text-red-500 text-[11px] block'>{error.message}</span>}
        </div>
    )
}
// border border-[#EDEDED] !text-black placeholder:text-black/50 w-full p-2.5 text-sm rounded-md
// focus:shadow-[0_0px_1px_5px_#F1EAFC] focus:border-[#A4BCFD]