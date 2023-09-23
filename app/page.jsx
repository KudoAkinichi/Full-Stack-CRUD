import Link from "next/link";
import SingleContact from "../components/SingleContact"


export default function Home() {
  const contacts = [
    {
      fullName: "John Doe",
      email : "john@gmail.com",
      phoneNumber : "8776576346364",
      address : "ohio",
    },
    {
      fullName: "John Doe",
      email : "john@gmail.com",
      phoneNumber : "8776576346364",
      address : "ohio",
    },
  ]

  return (
    <div className="w-[90%] lg:w-[70%] mx-auto my-[5rem]">
      <div className="text-right">
        <Link href="/addContact">
          <span className="p-2 py-3 bg-blue-600 rounded-md hover:bg-blue-700/50">
            Add Contact 
          </span>
        </Link>
      </div>

      <div className="mt-[2rem]">
        <h1 className="text-center text=3xl py-4 uppercase">Contact App</h1>
        <table className="w-full">
          <tbody>
            <tr className="bg-white/70 h-[4rem] text-black/80">
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
            {contacts.map((item, i) => (
              <SingleContact item={item} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
