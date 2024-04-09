import React from 'react'
import i18next from 'i18next'
import { Listbox, Transition } from '@headlessui/react'
import { Icon } from '../icon'
import { languages } from '@/shared/lib/constants/languages'

export const LanguageSelector = () => {
    const onChangeLanguage = (lang: string) => {
        i18next.changeLanguage(lang)
        localStorage.setItem('i18nextLng', lang)
    }
    const [selected, setSelected] = React.useState(languages[0])
    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
                <Listbox.Button className="relative w-full rounded-sm h-[48px] px-3 cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <Icon type={"language"} />
                </Listbox.Button>
                <Transition
                    as={React.Fragment}
                    enter="transition ease-in duration-100"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="z-[9999] absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary/40 py-1 text-base ">
                        {languages.map((language, personIdx) => (
                            <Listbox.Option
                                key={personIdx}
                                onClick={() => onChangeLanguage(language.toLowerCase())}
                                className={({ active }) =>
                                    `relative cursor-default px-2.5 py-2 rounded-sm text-center text-white ${active ? 'bg-primary/50' : 'text-white'
                                    }`
                                }
                                value={language}>
                                <span>{language}</span>
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}
