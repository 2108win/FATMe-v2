"use client";
import { useParams } from "next/navigation";
import React from "react";

const Contact = () => {
  const param = useParams();

  return <div className="space-y-16 container">This is Contact page!</div>;
};

export default Contact;
