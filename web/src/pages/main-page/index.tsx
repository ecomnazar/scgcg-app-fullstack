import { Icon } from "@/shared/ui/icon"
import { Container } from "@/shared/ui/container"
import { LanguageSelector } from "@/shared/ui/language-selector"

export const MainPage = () => {
  return (
    <section className="container mx-auto">
      <Container>
        <nav className="flex items-center justify-between py-8 gap-x-4">
          <div className="flex gap-x-12 items-center justify-between">
            <img className="w-[40px]" src="/logo/undp-logo.svg" />
            <img className="w-[80px]" src="/logo/tugra-logo.svg" />
            <img className="w-[300px]" src="/logo/canada-text-logo.svg" />
          </div>
          <div className="flex items-center gap-x-6">
            <button className="h-[48px] px-[22px] bg-primary rounded-sm text-white">View course</button>
            <LanguageSelector />
            <button className="p-3 rounded-sm">
              <Icon type={"person"} />
            </button>
          </div>
        </nav>
      </Container>
    </section>
  )
}
