import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionDiv from "@/components/Motion";
import Pricing from "@/components/Pricing";
import Recomendation from "@/components/Recomendation";
import Stats from "@/components/Stats";
import Television from "@/components/Television";
import Image from "next/image";

export default function Home() {
    return (
        <div className="mx-auto font-volkhov flex flex-col gap-32 items-center w-screen max-w-screen-xl p-8 lg:px-32 overflow-x-hidden">
            <Header />
            <Stats />
            <Television />
            <Recomendation />
            <Pricing />

            <div className="w-full p-8 bg-slate-300 rounded-2xl flex-center flex-col">
                <h1 className="text-zinc-900 text-xl font-semibold font-[Montserrat] text-center max-w-md">Berlangganan Untuk Mendapatkan Informasi Terbaru dan Menjadi Anggota Kami</h1>
                <div className="flex flex-wrap gap-4 mt-8 lg:h-12">
                    <input className="max-md:w-full p-2 px-4 rounded-xl" type="text" placeholder="enter your email" />
                    <button className="p-2 px-4 bg-red-600 rounded-xl shadow-xl shadow-blue-400">Berlangganan</button>
                </div>
            </div>

            <Footer/>
        </div>
    );
}
