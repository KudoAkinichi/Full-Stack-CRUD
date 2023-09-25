import { connect } from "@/connect/connect"
import { Contacts } from "@/contactSchema/contact";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    const {fullName, email, address, phoneNumber} = await req.json();
    try {
       await connect();
       const newContact = await Contacts.create({
        fullName,
        email,
        address,
        phoneNumber,
       });
       return NextResponse.json(newContact)
    } catch (error) {
        throw new Error(error.message);
    }
}