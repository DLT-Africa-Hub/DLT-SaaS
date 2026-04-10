import { Button } from "../components/ui/Button"
import contactFormData from "./contactFormData.json"
import Modal from "react-modal"

type InputField = {
  label: string
  placeholder: string
}

type InputType = "text" | "email" | "textarea"

const fieldTypeMap: Record<string, InputType> = {
  name: "text",
  email: "email",
  message: "textarea",
}

type ContactFormProps = {
  isOpen: boolean
  onClose: () => void
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const { head, formDetails, illustration } = contactFormData
  const inputEntries = Object.entries(formDetails.input) as [string, InputField][]

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="outline-none"
      overlayClassName="fixed pt-[130px] md:pt-0 inset-0 z-50 flex items-center justify-center px-4 bg-black/60"
    >
    <div className="relative text-body bg-black rounded-[20px] py-[81px] px-[20px] md:px-[31px] flex items-center justify-center md:justify-between font-sf max-w-[1200px] w-full max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-body border border-white/20 rounded-full w-9 h-9"
          aria-label="Close contact form"
        >
          x
        </button>
        <form className="flex items-start flex-col  w-full max-w-[570px] gap-[20px]">
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
                          />
                        ) : (
                          <input
                            id={key}
                            name={key}
                            type={fieldType}
                            placeholder={field.placeholder}
                            className="w-full rounded-[10px] border border-[#464646] bg-transparent px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-button"
                          />
                        )}
                      </div>
                    )
                  })}
            </div>
            <Button className="w-full" variant="primary">
                    {formDetails.button.text}
            </Button>
        </form>

        <div className="hidden md:block h-full ">
            <img src={illustration} alt="Contact form illustration" className="object-cover"/>
        </div>

    </div>
    </Modal>
  )
}

export default ContactForm