// components/WhatsAppButton.js
import Link from "next/link";
import Image from "next/image";

const WHATSAPP_NUMBER = "8850687306";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed 
        bottom-8 
        right-8 
        z-50
        flex 
        items-center 
        gap-2
        bg-green-500 
        hover:bg-green-600 
        focus:outline-none 
        focus:ring-2 
        focus:ring-green-300 
        focus:ring-offset-2

        text-white 
        text-sm 
        font-medium 
        px-4 
        py-2 
        rounded-full

        shadow-lg 
        transition 
        duration-200 
        ease-in-out
      "
    >
      <Image src="/images/whatsapp.png" alt="" width={24} height={24} />
      <span>Chat with us</span>
    </Link>
  );
}
