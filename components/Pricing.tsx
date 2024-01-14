import { priceList } from "@/constants";
import Image from "next/image";

const validationList = ["Ponsel, Tablet, Komputer, TV", "No Ads", "Batalkan Kapan Saja", "Kualitas Video Baik", "Resolusi 480p", "Resolusi 720p", "Resolusi 1080p", "Resolusi 4k HDR"];

export default function Pricing() {
    return (
        <div className="w-full">
            <h1 className="text-center pb-16 text-4xl max-w-lg mx-auto">Pilih Paket yang Cocok Untukmu</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                {priceList.map(({ title, price, list }, i) => (
                    <div key={i.toLocaleString()} className={`w-full p-8 rounded-xl font-montserrat ${i === 1 ? "bg-gradient-to-tl from-neutral-900 via-neutral-700 to-neutral-900 border border-neutral-100" : "bg-neutral-800"}`}>
                        <h1 className="capitalize text-xl text-center mb-8">{title}</h1>
                        <h2 className="text-red-600 text-3xl text-center">
                            Rp {price.toLocaleString()}
                            <span className="text-base text-neutral-200">/bulan</span>
                        </h2>

                        <ul className="flex flex-col gap-4 mt-8">
                            {validationList.map((validate, index) => (
                                <li className="flex items-center gap-2" key={index.toLocaleString()}>
                                    <Image src="/acc.svg" alt="" width={30} height={30} className={`bg-red-600 p-1 rounded-full w-auto h-auto ${validate !== list[index + 1] ? "invisible" : ""}`} />
                                    <h1 className={`${validate !== list[index + 1] ? "text-zinc-400" : ""} text-sm`}>{validate}</h1>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
