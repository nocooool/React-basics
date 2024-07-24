import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
    const [name,  setName] = useState("");
    const [email,  setEmail] = useState("");
    const [text,  setText] = useState("");

    const handleSubmit = (e) => {
        e.preventdeafault();

        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
    }


    return (
        <section className="flex max-w-5xl my-0 mx-auto mt-10 items-end">
            <div className="flex flex-col justify-around gap-6">
                <div className="flex gap-4">
                    <Button
                    className= 'flex-grow w-1/2'
                    text= "VIA SUPPORT CHAT"
                    icon={<MdMessage fontSize= "24px"/>}/>

                    <Button 
                    className= 'flex-grow w-1/2'
                    text="VIA CALL" 
                    icon={<FaPhoneAlt fontSize="24px"/>} />
                </div>

                <Button 
                isOutline={true}
                text= "VIA EMAIL FORM"
                icon={<HiMail fontSize= "24px" />}
                />

                <form onSubmit={handleSubmit}
                className="flex flex-col w-full gap-4 items-center">
                    <div className="relative w-full">
                        <label 
                        className="text-sm absolute -top-3 left-3 bg-white py-0 px-3"
                        htmlFor="name">Name</label>

                        <input
                        className= "h-10 py-0 px-8 outline outline-black w-full" 
                        type="text" name="name" />
                    </div>

                    <div className="relative w-full">
                        <label 
                        className="text-sm absolute -top-3 left-3 bg-white py-0 px-3"
                        htmlFor="email">EMAIL</label>
                        <input
                        className= "h-10 py-0 px-8 outline outline-black w-full" 
                        type="email" name="email" />
                    </div>

                    <div className="relative w-full">
                        <label 
                        className="text-sm absolute -top-3 left-3 bg-white py-0 px-3"
                        htmlFor="text">TEXT</label>
                        <textarea 
                        className="pt-2 outline outline-black w-full"
                        name="text" rows= "4" />
                    </div>

                    <div className="flex justify-end">
                        <Button text= "SUBMIT BUTTON" />
                    </div>

                    <div>{name + " " + email + " " + text}</div>
                </form>
            </div>

        </section>
    )
}

export default ContactForm