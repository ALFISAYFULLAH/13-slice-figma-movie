import Image from "next/image";

export default function Television() {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full h-[400px] relative">
                <Image className="w-full h-full object-cover relative z-10 md:scale-110" src="/feature/television.png" alt="" width={600} height={400} />
                <div className="absolute z-0 top-10 left-28 w-80 h-80 bg-indigo-600 blur-xl opacity-70 rounded-full"></div>
            </div>
            <div className="w-full lg:aspect-video flex-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl">Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi</h1>
            </div>
        </div>
    );
}
