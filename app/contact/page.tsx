
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'WinLax - Contact'
  }
}


const Contact = () => {

  return <div className="space-y-16 container">This is Contact page!</div>;
};

export default Contact;
