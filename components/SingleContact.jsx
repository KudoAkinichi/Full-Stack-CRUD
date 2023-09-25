import React from "react";
import {BsFillTrash3Fill} from "react-icons/bs";
import {BiEdit} from "react-icons/bi"

const SingleContact = ({ item }) => {
  const { fullName, email, phoneNumber, address } = item;
  return <tr className="bg-white/40 h-[3rem] border-b border-black/40 text-center">
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{phoneNumber}</td>
        <td className="flex items-center gap-4 text-xl mt-[1rem]">
          <span className="cursor-pointer hover:opacity-70">
            <BsFillTrash3Fill />
          </span>
          <span className="cursor-pointer hover:opacity-70">
            <BiEdit/>
          </span>
        </td>
  </tr>;
};

export default SingleContact;
