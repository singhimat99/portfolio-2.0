import React, { useState, FormEventHandler } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";

type Props = {};
type Inputs = {
    name: string;
    email: string;
    message: string;
};

export default function Contact({}: Props) {
    const [formData, setFormData] = useState<Inputs>({
        name: "",
        email: "",
        message: "",
    });

    const sendEmail: FormEventHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        emailjs
            .send(
                "service_4giz8m5",
                "template_4nwbg37",
                formData,
                "ThpDWhmxSJ3owe4ym"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        alert(
            "You have successfully sent me a message! I will get back to you as soon as possible."
        );
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };
    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen py-20 ">
            <h2 className="section-title mb-4">Contact</h2>
            <div className="w-[80%] md:max-w-xl dark:text-dark-secondary/90">
                <p className="text-center text-base">
                    Feel free to contact me. Please fill out the form below and
                    I will get back to you as soon as possible.
                </p>
                <p className="flex items-center gap-4 justify-center mt-4 dark:text-dark-tertiary">
                    <MdEmail />
                    singhimat99@gmail.com
                </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <form
                    className="flex flex-col gap-4 md:gap-8 w-[75%] md:w-[50%]"
                    onSubmit={sendEmail}
                    id="form"
                >
                    <div className="flex flex-col gap-1 md:gap-4">
                        <label htmlFor="input_name">Name:</label>
                        <input
                            required
                            placeholder="Enter Your Name"
                            type="text"
                            id="input_name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    return { ...prev, name: e.target.value };
                                })
                            }
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
                            value={formData.email}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    return { ...prev, email: e.target.value };
                                })
                            }
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
                            value={formData.message}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    return { ...prev, message: e.target.value };
                                })
                            }
                            className="contact_form-input resize-none"
                            placeholder="Enter Your Message"
                            id="input_message"
                            name="message"
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        className="mt-4 place-self-end shadow-2xl uppercase text-xl p-4 border rounded-lg tracking-widest border-light-secondary dark:border-dark-secondary hover:transform hover:scale-110 transition-all"
                    />
                </form>
            </div>
        </div>
    );
}
