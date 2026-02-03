"use client";

export function Address() {

  return (
    <div
      id="endereco"
      className="w-full py-12 px-6 flex flex-col items-center text-center bg-[#003D4C] text-white"
    >
      <h1 className="text-3xl pb-3 font-bold " data-aos="fade-left">
        Nossa localização
      </h1>
      <a href="https://maps.app.goo.gl/56ysj3ahtctaD3Df6" target="_blank">
        <p className="pb-5" data-aos="fade-left">
          Avenida Oscarina Cunha Chaves, 343 - Patrimônio - Uberlândia | MG
        </p>
      </a>
      <h1 className="text-3xl pb-3 font-bold " data-aos="fade-left">
        Horário de atendimento
      </h1>
      <p className="pb-5" data-aos="fade-left">
        Segunda à sexta 08:00h às 19:00h
      </p>
      <p className="pb-5" data-aos="fade-left">
        Sábado 08:00 às 12:00h
      </p>
    </div>
  );
}
