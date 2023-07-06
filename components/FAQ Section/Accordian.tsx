import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

function Accordian({}: Props) {
  return (
    <Accordion type="single" className="mt-5 lg:max-w-lg" collapsible>
      <AccordionItem className="" value="item-1">
        <AccordionTrigger className="text-lg text-slate-800 font-semibold">
          Can dental procedures be performed painlessly?
        </AccordionTrigger>
        <AccordionContent className="">
          Yes, modern techniques and technology ensure a comfortable experience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg text-slate-800 font-semibold">
          What should I do if I have a dental emergency?
        </AccordionTrigger>
        <AccordionContent className="">
          Contact us immediately for guidance and, if necessary, seek prompt
          treatment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg text-slate-800 font-semibold">
          How can I address dental anxiety?
        </AccordionTrigger>
        <AccordionContent className="">
          Communicate your concerns with us and we can explore techniques such
          as relaxation exercises or sedation options to help manage dental
          anxiety.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg text-slate-800 font-semibold">
          How often should I visit the dentist for a check-up?
        </AccordionTrigger>
        <AccordionContent className="">
          Every six months, but it varies based on your oral health. Contact us
          to get a consultancy!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordian;
