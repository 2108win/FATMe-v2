import ContactCard from "@/components/(contact)/ContactCard";
import HeadingText from "@/components/HeadingText";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WinLax - Contact",
  };
}

const contactData = [
  {
    icon: "/icons/location.svg",
    title: "Location",
    description: "Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.",
  },
  {
    icon: "/icons/phone.svg",
    title: "Phone",
    description: "+84971292838",
    type: "phone",
  },
  {
    icon: "/icons/email.svg",
    title: "Email",
    description: "dangcapcuawin@gmail.com",
    type: "email",
  },
];

const Contact = () => {
  return (
    <div className="space-y-10">
      <div className="container flex max-w-4xl flex-col gap-10">
        <HeadingText
          bigTitle="Liên hệ"
          description="Để được hỗ trợ nhanh nhất, vui lòng liên hệ với chúng tôi."
          className="items-center text-center"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {contactData.map((item, index) => (
            <ContactCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7836.462477925561!2d106.803054!3d10.870009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2sus!4v1700470703532!5m2!1svi!2sus"
          className="rounded-box h-96 w-full overflow-hidden"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
