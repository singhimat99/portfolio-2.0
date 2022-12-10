import React, { useRef, FormEventHandler } from "react";
import emailjs from "@emailjs/browser";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

type Props = {};
type Inputs = {
    name: string;
    email: string;
    message: string;
};

export default function Contact({}: Props) {
    // const form = useRef<HTMLFormElement | undefined>();
    // const sendEmail: FormEventHandler = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm(
    //             "service_4giz8m5",
    //             "template_4nwbg37",
    //             form.current.,
    //             "ThpDWhmxSJ3owe4ym"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             }
    //         );
    //     alert(
    //         "You have successfully sent me a message! I will get back to you as soon as possible."
    //     );
    //     e.target.reset();
    // };
    return (
        <div className="relative">
            <h2 className="section-title">Contact</h2>
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-[80%] md:max-w-xl dark:text-dark-secondary/90">
                <p className="text-center text-base">
                    Feel free to contact me. Please fill out the form below and
                    I will get back to you as soon as possible.
                </p>
                <p className="flex items-center gap-4 justify-center mt-4 dark:text-dark-tertiary">
                    <MdEmail />
                    singhimat99@gmail.com
                </p>
            </div>
            <div className="absolute top-56 py-10 flex flex-col justify-center items-center w-full">
                <form
                    action=""
                    className="flex flex-col gap-4 md:gap-8 w-[75%] md:w-[50%]"
                    // ref={form}
                    // onSubmit={sendEmail}
                >
                    <div className="flex flex-col gap-1 md:gap-4">
                        <label htmlFor="input_name">Name:</label>
                        <input
                            required
                            placeholder="Enter Your Name"
                            type="text"
                            id="input_name"
                            className="contact_form-input"
                            name="name"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="input_email">Email:</label>
                        <input
                            required
                            placeholder="Enter Your Email"
                            type="email"
                            id="input_email"
                            className="contact_form-input"
                            name="email"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="input_message">Message:</label>
                        <textarea
                            required
                            cols={30}
                            rows={5}
                            className="contact_form-input resize-none"
                            placeholder="Enter Your Message"
                            id="input_message"
                            name="message"
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        className="mt-4 place-self-end uppercase text-xl p-4 border rounded-lg tracking-widest border-light-secondary dark:border-dark-secondary"
                    />
                </form>
            </div>
        </div>
    );
}
