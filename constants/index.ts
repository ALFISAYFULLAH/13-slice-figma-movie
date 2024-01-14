export const featureList: { image: string; title: string; desc: string }[] = [
    {
        image: "/feature/desktop.svg",
        title: "Tonton langsung di tv",
        desc: "Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi",
    },
    {
        image: "/feature/device.svg",
        title: "Download untuk offline",
        desc: "Simpan dengan mudah agar selalu ada acara TV dan film yang bisa ditonton",
    },
    {
        image: "/feature/share.svg",
        title: "Akses berbagai perangkat",
        desc: "Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu",
    },
    {
        image: "/feature/child.svg",
        title: "Buat profil untuk anak",
        desc: "Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak ",
    },
];

export const recomendationList: { image: string; title: string; genre: string; rating: number }[] = [
    {
        image: "/film/peaky-blinders.jpeg",
        title: "peaky blinders",
        genre: "crime, drama",
        rating: 8.8,
    },
    {
        image: "/film/sipderman-no-way.jpeg",
        title: "sipderman: no way home",
        genre: "action, advanture, fantasy",
        rating: 8.8,
    },
    {
        image: "/film/arcane-lol.jpeg",
        title: "arcane: league of legends",
        genre: "animation, action, advanture",
        rating: 9.2,
    },
    {
        image: "/film/joker.jpeg",
        title: "joker",
        genre: "crime, drama, triler",
        rating: 9.4,
    },
];

export const priceList: { title: string; price: number; list: any }[] = [
    {
        title: "basic",
        price: 120000,
        list: {
            1: "Ponsel, Tablet, Komputer, TV",
            2: "No Ads",
            3: "Batalkan Kapan Saja",
            4: "Kualitas Video Baik",
            5: "Resolusi 480p",
        },
    },
    {
        title: "standar",
        price: 150000,
        list: {
            1: "Ponsel, Tablet, Komputer, TV",
            2: "No Ads",
            3: "Batalkan Kapan Saja",
            4: "Kualitas Video Baik",
            5: "Resolusi 480p",
            6: "Resolusi 720p",
        },
    },
    {
        title: "premium",
        price: 180000,
        list: {
            1: "Ponsel, Tablet, Komputer, TV",
            2: "No Ads",
            3: "Batalkan Kapan Saja",
            4: "Kualitas Video Baik",
            5: "Resolusi 480p",
            6: "Resolusi 720p",
            7: "Resolusi 1080p",
            8: "Resolusi 4k HDR",
        },
    },
];