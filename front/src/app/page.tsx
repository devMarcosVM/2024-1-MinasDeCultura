import { Search, MapPin, CalendarClock, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-primary-gray flex flex-col items-center min-h-screen p-12">
      <div className="container bg-primary-white border rounded-lg flex flex-col items-center justify-center lg:p-12 p-8">
        <h1 className="font-sans text-4xl text-center mb-[50px]">
          Realize sua pesquisa filtrando os resultados desejados:
        </h1>
        <ul className="flex lg:flex-row w-full justify-center flex-col gap-4">
          <li className="relative flex items-center">
            <Search className="w-6 h-6" color="#ED1C24" />
            <input
              type="text"
              placeholder="Assunto"
              className="w-full px-4 py-2 "
            />
            <div className="border-b border-black absolute left-0 right-0 bottom-0"></div>
          </li>

          <li className="relative flex items-center">
            <MapPin className="w-6 h-6" color="#ED1C24" />
            <input
              type="text"
              placeholder="Local"
              className="w-full px-4 py-2 "
            />
            <div className="border-b border-black absolute left-0 right-0 bottom-0"></div>
          </li>

          <li className="relative flex items-center">
            <CalendarClock className="w-6 h-6" color="#ED1C24" />
            <input
              type="text"
              placeholder="Data"
              className="w-full px-4 py-2"
            />
            <div className="border-b border-black absolute left-0 right-0 bottom-0"></div>
          </li>
          <li>
            <button className="flex flex-row items-center gap-2 px-6 py-4 w-full md:justify-start justify-center bg-primary-red text-white rounded-lg">
              Buscar
              <MoveRight className="w-6 h-6" color="#fff" />
            </button>
          </li>
        </ul>
      </div>
      <div className="container h-[485px] bg-primary-white border rounded-lg mt-8"></div>
    </main>
  );
}
