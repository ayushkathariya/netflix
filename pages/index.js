import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import FormComponent from "../components/formcomponent";
import Card from "../components/Card";
import image1 from "../public/en.png";

export default function index() {
  return (
    <>
      <Head>
        <title>Netflix Nepal</title>
      </Head>
      <div>
        <Navbar />
        {/* main content */}
        <main className="text-white bg-black">
          <div className="p-5">
            <div className="flex flex-col gap-4 px-4 pt-14 ">
              <h2 className="text-[2.5rem] font-bold">
                Unlimited movies, TV shows, and more.
              </h2>
              <p className="font-semibold">Plans now start at USD2.99/month.</p>
              <p className="font-semibold">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <FormComponent />
            </div>
          </div>
        </main>
        <Card
          image={image1}
          heading="Enjoy on your TV"
          text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        />
        <Card
          image={image1}
          heading="Watch everywhere."
          text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
        <Card
          image={image1}
          heading="Create profiles for kids."
          text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        />
        <Card
          image={image1}
          heading="Download your shows to watch offline."
          text="Save your favorites easily and always have something to watch."
        />
      </div>
    </>
  );
}
