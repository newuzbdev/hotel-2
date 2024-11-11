import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center my-3">
            <h1
              className="text-[48px] leading-[56px] font-normal"
              style={{
                fontFamily: "Zodiak",
                textAlign: "left",
                color: "rgba(19, 99, 222, 1)",
              }}
            >
              Tez-Tez So'raladigan Savollar
            </h1>
          </div>
        </div>
      </div>
      <>
        <Accordion type="single" collapsible className="w-full space-y-4 pt-5">
          <AccordionItem
            value="item-1"
            className="border rounded-lg px-6 py-2 shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-base font-medium">
                Mehmonxonaga kirish va chiqish vaqtlari qanday?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              Check-in va check-out vaqtlari mehmonxona qoidalariga muvofiq
              belgilanadi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border rounded-lg px-6 py-2 shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-base font-medium">
                Mehmonxonada ovqatlanish imkoniyatlari bormi?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 ">
              Ha, bizning restoranimiz har kuni ertalabdan kechgacha xizmat
              ko'rsatadi va turli xil milliy va xalqaro taomlarni taklif etadi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border rounded-lg px-6 py-2 shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-base font-medium">
                Mehmonxona bepul Wi-Fi xizmatini taqdim etadimi?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              Ha, barcha xonalarda va umumiy joylarda bepul Wi-Fi mavjud.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border rounded-lg px-6 py-2 shadow-sm"
          >
            <AccordionTrigger className="flex justify-between hover:no-underline">
              <span className="text-base font-normal">
                Mehmonxonaga yaqin diqqatga sazovor joylar bormi?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              Ha, mehmonxona markaziy joyda joylashgan va ko'plab diqqatga
              sazovor joylar yaqin masofada joylashgan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    </>
  );
}
