import React from 'react'
import Footer from '../components/Footer';
import Header from "../components/common/Header"
import ContactForm from '../components/common/ContactForm';
import FindUs from '../components/common/FindUs';




export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
      <Header bgColor='bg-white' text='' border=''/>
      <main>
        <ContactForm />
        <FindUs />
      </main>
      <Footer />
    </div>
  );
}



// Contact Form Component
// const ContactForm = () => {
//   return (
//     <div className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
//         <h1 className="text-4xl md:text-5xl lg:text-[80px] font-times font-bold text-center text-gray-900 mb-12">
//           Contact Form
//         </h1>
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//           {/* Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Name*
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Full name"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email*
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="xyz@gmail.com"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
//             />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number*
//             </label>
//             <div className="flex">
//               <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
//                 +91
//               </span>
//               <input
//                 type="tel"
//                 id="phone"
//                 placeholder="98256485"
//                 className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-r-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
//               />
//             </div>
//           </div>

//           {/* Service Interest 1 */}
//           <div>
//             <label htmlFor="service1" className="block text-sm font-medium text-gray-700 mb-1">
//               Service Interest*
//             </label>
//             <div className="relative">
//               <select
//                 id="service1"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm appearance-none focus:ring-amber-500 focus:border-amber-500 bg-white"
//                 defaultValue="tmt"
//               >
//                 <option value="tmt">TMT Standard</option>
//                 <option value="other">Other Service</option>
//               </select>
//               <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//             </div>
//           </div>

//           {/* Plot Size */}
//           <div>
//             <label htmlFor="plot-size" className="block text-sm font-medium text-gray-700 mb-1">
//               Plot Size*
//             </label>
//             <div className="flex">
//               <input
//                 type="text"
//                 id="plot-size"
//                 placeholder="2435"
//                 className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-l-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
//               />
//               <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
//                 sqft
//               </span>
//             </div>
//           </div>

//           {/* Service Interest 2 */}
//           <div>
//             <label htmlFor="service2" className="block text-sm font-medium text-gray-700 mb-1">
//               Service Interest*
//             </label>
//             <div className="relative">
//               <select
//                 id="service2"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm appearance-none focus:ring-amber-500 focus:border-amber-500 bg-white"
//                 defaultValue="tmt"
//               >
//                 <option value="tmt">TMT Standard</option>
//                 <option value="other">Other Service</option>
//               </select>
//               <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="md:col-span-2 flex justify-center mt-6">
//             <button
//               type="submit"
//               className="px-10 py-4 bg-[rgb(181,135,24)] text-white rounded-md text-base font-medium hover:bg-amber-800 transition-colors"
//             >
//               Request a Consultation
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// Find Us Component
// function FindUs() {
//   return (
//     <section 
//  className="relative w-full max-w-9xl p-8 md:p-12 rounded-lg text-white bg-[url('/Assets/contact.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-900/70 before:via-gray-900/70 before:to-blue-800/70 before:rounded-lg">
      
      
      
      
      
  
      
//       {/* Content wrapper */}
//       <div className="relative z-10">
//         <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">
//           Find Us
//         </h1>
//         <p className="text-lg text-gray-300 mb-6">
//           Reach out for bookings, inquiries, or personalized packages!
//         </p>
        
//         {/* Top HR line */}
//         <hr className="border-gray-500" />

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          
//           {/* Left Column */}
//           <div className="flex flex-col gap-8">
            
//             {/* Office Address */}
//             <div className="flex flex-col">
//               <div className="flex items-start gap-4">
//                 <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300" />
//                 <div>
//                   <h2 className="text-xl font-semibold mb-2">Office Address</h2>
//                   <p className="text-gray-300 leading-relaxed">
//                     1st Floor, SK CompoundBaneswar More, Eastern Bypass Road Siliguri,
//                     West Bengal 734006, India
//                   </p>
//                   <a 
//                     href="#" 
//                     className="text-gray-300 hover:text-white underline mt-2 inline-block"
//                   >
//                     Click Map
//                   </a>
//                 </div>
//               </div>
//               <hr className="border-gray-500 mt-8" />
//             </div>

//             {/* Email Us */}
//             <div className="flex flex-col">
//               <div className="flex items-start gap-4">
//                 <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300" />
//                 <div>
//                   <h2 className="text-xl font-semibold mb-2">Email Us</h2>
//                   <a 
//                     href="mailto:contact@themodernthekedar.com" 
//                     className="text-gray-300 hover:text-white break-all"
//                   >
//                     contact@themodernthekedar.com
//                   </a>
//                   <span className="text-gray-400 text-sm block">(click-to-mail)</span>
//                 </div>
//               </div>
//               <hr className="border-gray-500 mt-8" />
//             </div>

//             {/* Follow Us */}
//             <div className="flex flex-col">
//               <div className="flex items-center gap-4">
//                 <h2 className="text-xl font-semibold">Follow Us :</h2>
//                 <div className="flex gap-3">
//                   <a href="#" aria-label="Facebook" className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-900 transition-colors">
//                     <Facebook className="w-5 h-5" />
//                   </a>
//                   <a href="#" aria-label="Instagram" className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-900 transition-colors">
//                     <Instagram className="w-5 h-5" />
//                   </a>
//                   {/* Using Twitter (X) as a placeholder for the X icon */}
//                   <a href="#" aria-label="Twitter" className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-900 transition-colors">
//                     <Twitter className="w-5 h-5" />
//                   </a>
//                   <a href="#" aria-label="LinkedIn" className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-blue-900 transition-colors">
//                     <Linkedin className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//           </div>
          
//           {/* Right Column */}
//           <div className="flex flex-col gap-8">

//             {/* Operating Hours */}
//             <div className="flex flex-col">
//               <div className="flex items-start gap-4">
//                 <Clock className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300" />
//                 <div>
//                   <h2 className="text-xl font-semibold mb-2">Operating Hours</h2>
//                   <p className="text-gray-300">
//                     Monday-Saturday: 11:00 am to 6:00 pm
//                   </p>
//                 </div>
//               </div>
//               <hr className="border-gray-500 mt-8" />
//             </div>

//             {/* Contact Details */}
//             <div className="flex flex-col">
//               <div className="flex items-start gap-4">
//                 <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-gray-300" />
//                 <div>
//                   <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
//                   <a 
//                     href="tel:+919332016086" 
//                     className="text-gray-300 hover:text-white"
//                   >
//                     +91 9332016086
//                   </a>
//                   <span className="text-gray-400 text-sm block">(click-to-call)</span>
//                 </div>
//               </div>
//               <hr className="border-gray-500 mt-8" />
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// Helper component for "Find Us" section
// const InfoItem = ({ icon, title, lines, linkText, linkHref }) => (
//   <div className="flex items-start space-x-4">
//     <div className="flex-shrink-0 pt-1">{icon}</div>
//     <div>
//       <h3 className="text-xl font-semibold mb-1">{title}</h3>
//       {lines.map((line, index) => (
//         <p key={index} className="text-blue-100">{line}</p>
//       ))}
//       {linkText && (
//         <a href={linkHref} className="text-blue-300 hover:text-white underline mt-1 inline-block">
//           {linkText}
//         </a>
//       )}
//     </div>
//   </div>
// );

