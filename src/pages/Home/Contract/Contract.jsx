import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import Button from "../../../Components/Button/Button";

const Contract = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_mail_service,
        import.meta.env.VITE_mail_template,
        form.current,
        import.meta.env.VITE_mail_publicKey
      )
      .then(
        (result) => {
          toast("Email Send Successfully");
          console.log(result.text);
          reset();
        },
        (error) => {
          toast(error.text || "Something was Wrong");
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contract" className="mt-14 lg:mt-0">
      <div>
        <SectionTitle
          logo="fa-regular:envelope"
          title="Contract Me"
          headline="Contact With Me"
        />
      </div>
      <form
        ref={form}
        className="bg-base-200 rounded-md contract-from p-10 mt-16 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div data-aos="zoom-in-right" className="form-control">
          <label className="label">
            <span className="label-text  text-base uppercase">Your Name </span>
          </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            className="input rounded input-bordered w-full"
          />
          {errors.name && (
            <span className="text-red-700 mt-1">Name is required</span>
          )}
        </div>
        <div data-aos="zoom-in-right" className="form-control">
          <label className="label">
            <span className="label-text  text-base uppercase">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input rounded input-bordered w-full"
          />
          {errors.email && (
            <span className="text-red-700 mt-1">Email is required</span>
          )}
        </div>
        <div data-aos="zoom-in-right" className="form-control">
          <label className="label">
            <span className="label-text  text-base uppercase">Subject</span>
          </label>
          <input
            type="text"
            name="subject"
            {...register("subject", { required: true })}
            className="input rounded input-bordered w-full"
          />
          {errors.subject && (
            <span className="text-red-700 mt-1">Subject is required</span>
          )}
        </div>
        <div data-aos="zoom-in-right" className="form-control">
          <label className="label">
            <span className="label-text  text-base uppercase">
              Your Message
            </span>
          </label>
          <textarea
            name="message"
            {...register("message", { required: true })}
            className="textarea textarea-bordered textarea-lg w-full rounded"
          ></textarea>
          {errors.message && (
            <span className="text-red-700 mt-1">Message is required</span>
          )}
        </div>
        <Button type="submit" size="full">
          Send Massage <Icon className="text-xl relative top-[1px]" icon="fa-brands:telegram-plane" />
        </Button>
      </form>
    </div>
  );
};

export default Contract;
