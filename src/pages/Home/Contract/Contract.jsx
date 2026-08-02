import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import Button from "../../../Components/Button/Button";
import { sendContactEmail } from "../../../services/sendContactEmail";

const Contract = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await sendContactEmail(data);
      toast("Email Send Successfully");
      reset();
    } catch (error) {
      toast(error.message || "Something was Wrong");
      console.error(error);
    }
  };

  return (
    <section id="contract" className="contact-section grid gap-8 border-t pt-16 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <SectionTitle
          logo="fa-regular:envelope"
          title="Contact Me"
          headline="Let's build something useful"
        />
        <p className="mt-6 max-w-md leading-8">
          Send a short note about your idea, product, or role. I will get the message directly in my inbox and reply from there.
        </p>
        <div className="mt-8 space-y-3 text-sm">
          <a className="profile-contact-row" href="mailto:mokhlesurinfo5@gmail.com">
            <Icon icon="fa-solid:envelope" /> mokhlesurinfo5@gmail.com
          </a>
          <a className="profile-contact-row" href="tel:+8801818886577">
            <Icon icon="heroicons-outline:phone" /> +8801818886577
          </a>
        </div>
      </div>
      <form
        className="contract-form space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div data-aos="fade-up" className="form-control">
          <label className="label">
            <span className="label-text text-xs font-semibold uppercase">Your Name </span>
          </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            className="input rounded input-bordered w-full"
          />
          {errors.name && (
            <span className="form-error mt-1">Name is required</span>
          )}
        </div>
        <div data-aos="fade-up" className="form-control">
          <label className="label">
            <span className="label-text text-xs font-semibold uppercase">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input rounded input-bordered w-full"
          />
          {errors.email && (
            <span className="form-error mt-1">Email is required</span>
          )}
        </div>
        <div data-aos="fade-up" className="form-control">
          <label className="label">
            <span className="label-text text-xs font-semibold uppercase">Subject</span>
          </label>
          <input
            type="text"
            name="subject"
            {...register("subject", { required: true })}
            className="input rounded input-bordered w-full"
          />
          {errors.subject && (
            <span className="form-error mt-1">Subject is required</span>
          )}
        </div>
        <div data-aos="fade-up" className="form-control">
          <label className="label">
            <span className="label-text text-xs font-semibold uppercase">
              Your Message
            </span>
          </label>
          <textarea
            name="message"
            {...register("message", { required: true })}
            className="textarea textarea-bordered textarea-lg w-full rounded"
          ></textarea>
          {errors.message && (
            <span className="form-error mt-1">Message is required</span>
          )}
        </div>
        <Button type="submit" size="full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"} <Icon className="text-xl relative top-[1px]" icon="fa-brands:telegram-plane" />
        </Button>
      </form>
    </section>
  );
};

export default Contract;
