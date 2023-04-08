import React from "react";
import Axios from "axios";
import { PhoneBook } from "@/typins";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type UserPageProps = {
  params: {
    contactId: string;
  };
};

const fetchContact = async (contactId: string) => {
  //   const fetchUser: PhoneBook = await Axios.get(
  //     `https://phonbook-api.onrender.com/phonebook/${contactId}`
  //   )
  //     .then((user) => {
  //       //   console.log(user.data);
  //       return user.data;
  //     })
  //     .catch((err) => console.log(err));

  const res = await fetch(
    `https://phonbook-api.onrender.com/phonebook/${contactId}`,
    { next: { revalidate: 60 } }
  );
  const fetchUser: PhoneBook = await res.json();
  console.log(fetchUser);
  return fetchUser;
};

async function UserPage({ params: { contactId } }: UserPageProps) {
  const phonebook = await fetchContact(contactId);

  if (!phonebook._id) return notFound();

  return (
    <div
      key={phonebook._id}
      className="bg-yellow-400 text-center text-xl font-bold pt-16"
    >
      <h1 className="mb-8 text-2xl text-blue-700">Contact Data</h1>
      <p className="mb-4 text-gray-700">Name: {phonebook.name}</p>
      <p className="mb-4 text-gray-700">Address: {phonebook.address}</p>
      <p className="mb-4 text-gray-700">Number: {phonebook.contact}</p>
    </div>
  );
}

export default UserPage;

// export async function generateStaticParams() {
//   const res = await fetch("https://phonbook-api.onrender.com/phonebook/");
//   const contacts: PhoneBook[] = await res.json();

//   return contacts.map((user) => {
//     contactId: user._id.toString();
//   });
// }
