import { getCertificateApi } from "@/shared/api/certificateApi";
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Navbar } from "@/shared/ui/navbar";
import React from "react";
import toast from "react-hot-toast";

interface FormProps<T> {
    fullname: T;
    email: T;
}

export const CertificatePage = () => {
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        e.preventDefault()
        const event = e.target as typeof e.target & FormProps<{ value: string }>
        const data = {
            id: 1,
            fullname: event.fullname.value,
            email: event.email.value
        }
        await getCertificateApi(data).then(() => {
            toast.success('Please check your email')
            setTimeout(() => {
                window.location.replace('/')
            }, 3000);
        })
        setLoading(false)
    }

    return (
        <section className="w-screen h-screen">
            <Navbar />
            <form onSubmit={handleSubmit} className="bg-slate-50 w-full max-w-[90%] sm:max-w-[500px] p-8 rounded-md space-y-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-[20px] font-medium mb-8">You are succesfully completed course, get your certificate 🎉</h3>
                <Input name="fullname" placeholder="Your fullname (will be displayed in certificate)" />
                <Input name="email" placeholder="Your email" />
                <Button type="submit" loading={loading} title={"Submit"} className="w-full" size="small" />
            </form>
        </section>
    )
}
