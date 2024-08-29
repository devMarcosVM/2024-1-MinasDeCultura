import Filtro from "@/components/Filtro";
import Dashboard from '@/components/Dashboard';

export default function Pesquisa() {
    return (
        <main className="bg-primary-gray dark:bg-neutral-900 flex flex-col items-center min-h-screen gap-10 p-12">
            <Filtro />
            <Dashboard/>
        </main>
    )
}