import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  { id: 1, name: "TMT Standard" },
  { id: 2, name: "Other Service" },
];

// Custom Select Component
const CustomSelect = () => {
  const [selected, setSelected] = useState(services[0]);

  return (
    <div className="relative">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 flex justify-between items-center">
          {selected.name}
          <ChevronDown size={20} className="text-gray-500" />
        </Listbox.Button>

        <Listbox.Options className="absolute mt-1 w-full bg-white text-gray-800 rounded-md shadow-lg border border-gray-200 z-50">
          {services.map((service) => (
            <Listbox.Option
              key={service.id}
              value={service}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {service.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};


// Contact Form Component
const ContactForm = () => {
  return (
    <div className=" pt-[13vh] py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-[80px] font-times font-bold text-center text-gray-900 mb-15">
          Contact Form
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name*
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                +91
              </span>
              <input
                type="tel"
                placeholder="98256485"
                className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-r-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>

          {/* Service Interest 1 - Custom Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Interest*
            </label>
            <CustomSelect />
          </div>

          {/* Plot Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Plot Size*
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="2435"
                className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-l-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
              />
              <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
                sqft
              </span>
            </div>
          </div>

          {/* Service Interest 2 - Custom Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Interest*
            </label>
            <CustomSelect />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="px-10 py-4 bg-[rgb(181,135,24)] text-white rounded-md text-base font-medium hover:bg-amber-800 transition-colors"
            >
              Request a Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
