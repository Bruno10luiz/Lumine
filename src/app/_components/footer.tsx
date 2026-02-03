import lumineLogo from "../../../public/Lumine-logo2.webp";
import Image from "next/image";
import {
  InstagramLogo,
  WhatsappLogo,

} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="bg-[#2d5b66] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8"></div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <a href="/">
              <Image
                src={lumineLogo}
                alt="Logo Vet Mais"
                className="h-28 w-48 mb-4 align-middle"  
              />
            </a>
            <p className="mb-4 font-bold">  
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <p className="mb-3">Segunda à sexta 08:00h às 19:00h</p>
            <p className="mb-3">Sábado 08:00 às 12:00h</p>

            <a
              href="https://wa.me/5534996310107?text=Olá, vim pelo site e gostaria de mais informações."
              target="_blank"
              className="bg-green-500 px-4 py-2 rounded-md"
            >
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            
            <p>Fixo: (34) 3234-4952</p>
            <p>Celular: (34) 9 9631-0107</p>
            <p>Avenida Oscarina Cunha Chaves, 343 - Patrimônio - Uberlândia | MG</p>
            <p className="border-t border-white/20 pt-4"> R.T. M.V. Aline Vieira Fernandes Ferreira - CRMV 23171/MG</p>
            <p className="pt-2">Sthefany Lara Sousa - CRMV 23257/MG </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/lumineclinicavet/" target="_blank">
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/5534996310107?text=Olá, vim pelo site e gostaria de mais informações."
                target="_blank"
              >
                <WhatsappLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
