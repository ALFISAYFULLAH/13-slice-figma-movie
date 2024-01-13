import { featureList } from "@/constants";
import Image from "next/image";

export default function Stats() {
    return (
        <div className="w-full font-volkhov">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mb-8">Layanan Terbaik yang Tidak Mengecewakan</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featureList.map(({ image, title, desc }, index) => (
                    <div className="bg-neutral-800 rounded-xl p-6" key={index}>
                        <Image className="mx-auto md:mx-0 mb-4" src={image} alt="" width={50} height={50} />
                        <h1 className="text-2xl pb-2 text-center lg:text-start">{title}</h1>
                        <p className="text-neutral-200 text-sm text-center lg:text-start">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
