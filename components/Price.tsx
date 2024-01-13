import React from "react";


export default function Price() {
    const price = 120000;
    return (
        <div>
            <h1 className="text-center pb-16 text-6xl">Pilih Paket yang Cocok Untukmu</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="w-full border border-neutral-100 bg-neutral-700 p-4 rounded-xl">
                    <h1>basic</h1>
                    <h2 className="text-red-600 text-5xl">120.000<span className="text-base text-neutral-200">/bulan</span></h2>
                </div>
            </div>
        </div>
    );
}
