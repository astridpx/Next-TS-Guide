import React from "react";
import Axios from "axios";
import { PhoneBook } from "@/typins";
import Link from "next/link";

const FetchContact = async () => {
  // const res = await fetch("https://phonbook-api.onrender.com/phonebook/");
  // const contacts: PhoneBook[] = await res.json();
  // return contacts;

  const contacts: PhoneBook[] = await Axios.get(
    "https://phonbook-api.onrender.com/phonebook/"
  )
    .then((result) => {
      // console.log(result.data);
      return result.data;
    })
    .catch((err) => console.log(err));

  return contacts;
};

async function Phonebooks() {
  const phonebook = await FetchContact();

  return (
    <>
      {phonebook.map((contact) => {
        return (
          <p key={contact._id} className="text-lg mr-4">
            Name:
            <Link
              href={`/phonebook/${contact._id}`}
              className="px-4 underline text-gray-600"
            >
              {contact.name}
            </Link>
          </p>
        );
      })}
    </>
  );
}

export default Phonebooks;
