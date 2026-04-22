import { Button } from "../components/ui/Button"
import contactFormData from "./contactFormData.json"
import Modal from "react-modal"
import { useState, useRef } from "react"
import { submitMessage } from "../services/contactService"
import { toast } from "react-toastify"

type InputField = {
  label: string
  placeholder: string
}

type InputType = "text" | "email" | "textarea"

const fieldTypeMap: Record<string, InputType> = {
  name: "text",
  email: "email",
  company: "text",
  projectGoal: "textarea",
  timeline: "text",
  budgetBand: "text",
  message: "textarea",
}

type ContactFormProps = {
  isOpen: boolean
  onClose: () => void
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const { head, formDetails, illustration } = contactFormData
  const inputEntries = Object.entries(formDetails.input) as [string, InputField][]
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(formRef.current!)
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        company: formData.get("company") as string,
        projectGoal: formData.get("projectGoal") as string,
        timeline: formData.get("timeline") as string,
        budgetBand: formData.get("budgetBand") as string,
        message: formData.get("message") as string,
      }

      await submitMessage(data)
      toast.success("Message sent successfully! We'll be in touch soon.")
      formRef.current?.reset()
      onClose()
    } catch (error: unknown) {
      const errorMsg = error instanceof Error ? error.message : "Failed to send message. Please try again."
      toast.error(errorMsg)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="outline-none mt-[100px]"
      overlayClassName="fixed  h-screen   md:pt-0 inset-0 z-50 flex items-center justify-center px-4 bg-black/60"
    >
    <div className="relative text-body bg-black rounded-[20px] py-[81px] px-[20px] md:px-[31px] flex items-start justify-center md:justify-between font-sf max-w-[1200px] w-full max-h-[90vh] ">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-body border border-white/20 rounded-full w-9 h-9"
          aria-label="Close contact form"
        >
          x
        </button>
       <div className="overflow-y-auto h-[70vh]">
       <form ref={formRef} onSubmit={handleSubmit} className="flex items-start flex-col  w-full  max-w-[570px] gap-[20px]">
            <div className="flex flex-col gap-[25px]">
                <p className="text-[32px] md:text-[48px] font-semibold">{head.title}</p>
                <p className="text-[14px] md:text-[16px]  font-light text-[#FEA650]">{head.subTitle}</p>
            </div>



            <div className="flex flex-col gap-[10px] w-full" >
                  {inputEntries.map(([key, field]) => {
                    const fieldType = fieldTypeMap[key] ?? "text"

                    return (
                      <div key={key} className="flex items-start flex-col w-full gap-[20px]">
                        <label htmlFor={key}>{field.label}</label>
                        {fieldType === "textarea" ? (
                          <textarea
                            id={key}
                            name={key}
                            placeholder={field.placeholder}
                            className="w-full rounded-[10px] border border-[#464646] bg-transparent px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-button"
                            rows={5}
                            disabled={isLoading}
                          />
                        ) : (
                          <input
                            id={key}
                            name={key}
                            type={fieldType}
                            placeholder={field.placeholder}
                            className="w-full rounded-[10px] border border-[#464646] bg-transparent px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-button"
                            disabled={isLoading}
                            required={key === "name" || key === "email"}
                          />
                        )}
                      </div>
                    )
                  })}
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              variant="primary"
              disabled={isLoading}
            >
                    {isLoading ? "Sending..." : formDetails.button.text}
            </Button>
        </form>
       </div>

        <div className="hidden md:block h-full ">
            <img src={illustration} alt="Contact form illustration" className="object-cover"/>
        </div>

    </div>
    </Modal>
  )
}

export default ContactForm