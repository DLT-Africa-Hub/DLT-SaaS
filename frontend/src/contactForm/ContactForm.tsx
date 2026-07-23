import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { X } from "lucide-react";
import { toast } from "react-toastify";

import { Button } from "../components/ui/Button";
import { submitMessage } from "../services/contactService";
import contactFormData from "./contactFormData.json";

type InputField = {
  label: string;
  placeholder: string;
};

type InputType = "text" | "email" | "textarea";

const fieldTypeMap: Record<string, InputType> = {
  name: "text",
  email: "email",
  company: "text",
  projectGoal: "textarea",
  timeline: "text",
  budgetBand: "text",
  message: "textarea",
};

/** Fields that share a row on md+ */
const PAIR_KEYS = new Set(["name", "email", "timeline", "budgetBand"]);

type ContactFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-sf text-[15px] text-body placeholder:text-white/35 outline-none transition-[border-color,background-color,box-shadow] duration-200 hover:border-white/20 hover:bg-white/[0.06] focus:border-green-600/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(42,197,0,0.15)] disabled:cursor-not-allowed disabled:opacity-50";

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const { head, formDetails } = contactFormData;
  const inputEntries = Object.entries(formDetails.input) as [
    string,
    InputField,
  ][];
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const { body, documentElement } = document;
    const prev = {
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      htmlOverflow: documentElement.style.overflow,
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    documentElement.style.overflow = "hidden";

    return () => {
      body.style.overflow = prev.bodyOverflow;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.width = prev.bodyWidth;
      documentElement.style.overflow = prev.htmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(formRef.current!);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        company: formData.get("company") as string,
        projectGoal: formData.get("projectGoal") as string,
        timeline: formData.get("timeline") as string,
        budgetBand: formData.get("budgetBand") as string,
        message: formData.get("message") as string,
      };

      await submitMessage(data);
      toast.success("Message sent successfully! We'll be in touch soon.");
      formRef.current?.reset();
      onClose();
    } catch (error: unknown) {
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="outline-none"
      htmlOpenClassName="contact-modal-open"
      bodyOpenClassName="contact-modal-open"
      overlayClassName="fixed inset-0 z-50 flex items-center justify-center overflow-hidden overscroll-none bg-black/70 px-4 backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] font-sf text-body shadow-[0_24px_80px_-20px_rgba(0,0,0,0.8)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,rgba(42,197,0,0.12),transparent_55%)]"
          aria-hidden
        />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
          aria-label="Close contact form"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>

        <div className="relative max-h-[90vh] overflow-y-auto px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3 pr-8">
              <p className="text-[28px] font-semibold tracking-tight text-white sm:text-[36px]">
                {head.title}
              </p>
              <p className="max-w-2xl text-[14px] font-light leading-relaxed text-[#FEA650]/95 sm:text-[15px]">
                {head.subTitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-5">
              {inputEntries.map(([key, field]) => {
                const fieldType = fieldTypeMap[key] ?? "text";
                const spanFull = !PAIR_KEYS.has(key);

                return (
                  <div
                    key={key}
                    className={`flex flex-col gap-1.5 ${
                      spanFull ? "sm:col-span-2" : ""
                    }`}
                  >
                    <label
                      htmlFor={key}
                      className="text-[12px] font-medium tracking-wide text-white/55"
                    >
                      {field.label}
                    </label>
                    {fieldType === "textarea" ? (
                      <textarea
                        id={key}
                        name={key}
                        placeholder={field.placeholder}
                        className={`${fieldClass} min-h-25 resize-y`}
                        rows={4}
                        disabled={isLoading}
                      />
                    ) : (
                      <input
                        id={key}
                        name={key}
                        type={fieldType}
                        placeholder={field.placeholder}
                        className={fieldClass}
                        disabled={isLoading}
                        required={key === "name" || key === "email"}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl py-3.5 text-[15px] shadow-[0_0_32px_-8px_rgba(42,197,0,0.4)]"
              variant="primary"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : formDetails.button.text}
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ContactForm;
