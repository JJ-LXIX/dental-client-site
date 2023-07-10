import FormComponent from "./FormComponent";
import MapComponent from "./MapComponent";

type Props = {};

function ContactFormSection({}: Props) {
  return (
    <div className="bg-black ">
      <div
        id="contact"
        className="scroll-m-20 w-full md:mx-auto lg:max-w-6xl pt-20 pb-20 flex flex-col space-y-10 md:space-y-0 md:flex-row md:items-center"
      >
        <div className="w-full py-10">
          <h2 className="text-white text-center pb-4 text-4xl font-medium lg:text-5xl ">
            Contact Us
          </h2>

          <FormComponent />
        </div>

        <MapComponent />
      </div>
    </div>
  );
}

export default ContactFormSection;
