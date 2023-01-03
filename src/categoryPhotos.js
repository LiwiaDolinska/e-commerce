import photo11 from "./assets/photos/MenCategoryPhotos/photo11.jpg";
import photo12 from "./assets/photos/MenCategoryPhotos/photo12.jpg";
import photo13 from "./assets/photos/MenCategoryPhotos/photo13.jpg";
import photo14 from "./assets/photos/MenCategoryPhotos/photo14.jpg";
import photo15 from "./assets/photos/MenCategoryPhotos/photo15.jpg";
import photo16 from "./assets/photos/MenCategoryPhotos/photo16.jpg";
import photo9 from "./assets/photos/MenCategoryPhotos/photo9.jpg";
import photo10 from "./assets/photos/MenCategoryPhotos/photo10.jpg";
import photo7 from "./assets/photos/WomenCategoryPhotos/photo7.jpg";
import photo8 from "./assets/photos/WomenCategoryPhotos/photo8.jpg";
import photo1 from "./assets/photos/WomenCategoryPhotos/photo1.jpg";
import photo2 from "./assets/photos/WomenCategoryPhotos/photo2.jpg";
import photo3 from "./assets/photos/WomenCategoryPhotos/photo3.jpg";
import photo4 from "./assets/photos/WomenCategoryPhotos/photo4.jpg";
import photo5 from "./assets/photos/WomenCategoryPhotos/photo5.jpg";
import photo6 from "./assets/photos/WomenCategoryPhotos/photo6.jpg";


export const womenCategoryProducts = [
    { src: photo1, company: "Stradivarius", title: "Bluzka", price: "100 zł", id: "1" },
    { src: photo2, company: "Zara", title: "Spodnie", price: "300 zł", id: "2" },
    { src: photo3, company: "Stradivarius", title: "Bluzka", price: "100 zł", id: "3" },
    { src: photo4, company: "Zara", title: "Spodnie", price: "300 zł", id: "4" },
    { src: photo5, company: "Stradivarius", title: "Bluzka", price: "100 zł", id: "5" },
    { src: photo6, company: "Zara", title: "Spodnie", price: "300 zł", id: "6" },
    { src: photo7, company: "Stradivarius", title: "Bluzka", price: "100 zł", id: "7" },
    { src: photo8, company: "Zara", title: "Spodnie", price: "300 zł", id: "8" },
]

export const menCategoryProducts = [
    { src: photo11, company: "Stradivarius", title: "Bluzka", price: "100 zł", id: "11" },
    { src: photo12, company: "Zara", title: "Płaszcz", price: "300 zł", id: "12" },
    { src: photo13, company: "Stradivarius", title: "Bluzka", price: "100 zł", id: "13" },
    { src: photo14, company: "Zara", title: "Płaszcz", price: "300 zł", id: "14" },
    { src: photo15, company: "Stradivarius", title: "Bluzka", price: "100 zł", id: "15" },
    { src: photo16, company: "Zara", title: "Płaszcz", price: "300 zł", id: "16" },
    { src: photo9, company: "Stradivarius", title: "Bluzka", price: "100 zł", id: "9" },
    { src: photo10, company: "Zara", title: "Płaszcz", price: "300 zł", id: "10" },

]

export const allProducts = [
    ...womenCategoryProducts, ...menCategoryProducts
]