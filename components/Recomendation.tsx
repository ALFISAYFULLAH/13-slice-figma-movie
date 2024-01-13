import { recomendationList } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Recomendation() {
    return (
        <div className="w-full flex flex-col gap-8">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="w-full aspect-[4/1] flex items-end">
                    <h1 className="max-w-md text-5xl max-sm:text-center">Film dan Acara TV Populer Bulan Ini</h1>
                </div>
                <div className="w-full aspect-[4/1] flex justify-end items-end">
                    <button className="p-2 bg-red-500">Lihat semua</button>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 max-[380px]:grid-cols-1">
                {recomendationList.map(({ image, title, genre, rating }, index) => (
                    <div key={index} className="w-full rounded-xl p-4 border border-x-neutral-100">
                        <div className="w-full aspect-[4/5] md:aspect-video">
                            <Image className="w-full h-full object-cover object-top rounded-xl" src={image} alt={title} width={400} height={400} />
                        </div>
                        <div className="w-full flex flex-col justify-between pt-4 gap-2">
                            <h1 className="capitalize text-xl md:text-2xl">{title}</h1>
                            <h2>{genre}</h2>
                            <h3>⭐ {rating}/10 IMDb</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
