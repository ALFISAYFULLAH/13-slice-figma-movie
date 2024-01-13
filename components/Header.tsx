import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full">
            <div className="grid gap-10 lg:grid-cols-2 w-full">
                <div className="w-full h-full flex flex-col justify-center order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl">Nikmati Tontonan Dimana Saja, dan Kapan Saja</h1>
                    <p className="text-neutral-200 text-sm md:text-base pt-2 font-normal font-['Montserrat'] leading-6 md:leading-8">
                        Tonton apa saja secara online dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, dan gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi
                        Internet.
                    </p>
                </div>
                <div className="w-full aspect-square overflow-hidden lg:order-2">
                    <div className="h-full aspect-square -ml-16  bg-gradient-to-tl from-neutral-800 to-cyan-400 rounded-full overflow-hidden block-inset">
                        <Image className="w-full h-full object-contain lg:-ml-16" src="/spiderman.png" alt="" width={600} height={600} />
                    </div>
                </div>
            </div>
        </div>
    );
}