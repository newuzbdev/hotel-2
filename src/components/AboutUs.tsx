import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div>
        <Image
          src={"/images/aboutus1.svg"}
          alt="aboutus"
          width={68}
          height={85}
        />
      </div>
      <h1 className="text-blue-500 font-[Zodiak] text-[48px] text-center">
        Biz haqimizda
      </h1>
      <p className="text-center sm:w-[540px] lg:w-[840px] font-[Satoshi] leading-6">
        Bizning mehmonxonamiz — shinamlik va qulaylik uyg‘unlashgan maskan.
        Mehmonlarimizga yuksak darajadagi xizmat ko‘rsatish va unutilmas tajriba
        ulashish bizning bosh maqsadimizdir. Zamonaviy dizayndagi xonalarimiz,
        do‘stona muhit va ehtiyotkor xizmatimiz bilan sizga huzur bag‘ishlaymiz.
        Har bir mehmon biz uchun alohida ahamiyatga ega. Sizning istak va
        ehtiyojlaringizni inobatga olib, har bir tafsilotni mukammal qilishga
        intilamiz. Ish safaringiz bo‘ladimi yoki dam olish uchun kelgan
        bo‘lasizmi, bizning mehmonxonamizda siz o‘zingizni uyda his qilasiz.
        Kelgusidagi tashriflaringizni quvonch bilan kutib qolamiz va sizga eng
        yaxshi dam olish imkoniyatini taqdim etishga tayyormiz!
      </p>
      <Button className="bg-white text-black hover:bg-blue-500 hover:w-16 hover:h-16 transition-all duration-300 ease-out border-black border p-6 rounded-full font-[Satoshi] flex items-center justify-center group w-28">
        <span className="absolute transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-0">
          Band qilish
        </span>
        <ChevronRight className="absolute transform transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0" />
      </Button>
    </div>
  );
}
