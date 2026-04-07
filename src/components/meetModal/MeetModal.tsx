
import Modal from "react-modal";
import { AnimatePresence, motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { FaGoogle, FaVideo } from "react-icons/fa";
import React from "react";
import { Button } from "../ui/Button";


Modal.setAppElement("#root");

type Platform = "meet" | "zoom";

type PlatformModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MeetModal({ isOpen, onClose }: PlatformModalProps) {
  const [selectedPlatform, setSelectedPlatform] = React.useState<Platform | null>(null);

  const handleBack = () => setSelectedPlatform(null);

  const calendlyUrls: Record<Platform, string> = {
    meet: "https://calendly.com/druidde/meet-call",
    zoom: "https://calendly.com/druidde/zoom-call",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="outline-none"
      overlayClassName="fixed inset-0 z-50 flex items-center justify-center  pt-[150px]"
    >
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-[#FFFFFF1A]  font-sf text-base backdrop-blur-md border border-white/10 rounded-2xl shadow-xl w-full max-w-2xl md:mx-4 p-6 z-50"
            >
              {!selectedPlatform ? (
                <>
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Choose Meeting Platform
                  </h2>

                  <div className="space-y-3">
                    {/* Google Meet */}
                    <button
                      onClick={() => setSelectedPlatform("meet")}
                      className="w-full flex items-center gap-3 text-white p-4 rounded-xl border border-gray-200 hover:border-[var(--color-button)] hover:bg-[var(--color-button-50)] transition"
                    >
                      <FaGoogle className="text-green-600 text-xl" />
                      <span className="font-medium">Google Meet</span>
                    </button>

                    {/* Zoom */}
                    <button
                      onClick={() => setSelectedPlatform("zoom")}
                      className="w-full flex items-center gap-3 p-4 text-white rounded-xl border border-gray-200 hover:border-[var(--color-button)] hover:bg-[var(--color-button-50)] transition"
                    >
                      <FaVideo className="text-blue-500 text-xl" />
                      <span className="font-medium">Zoom</span>
                    </button>
                  </div>

                  <Button
                    onClick={onClose}
                    className="mt-6 w-full py-2 rounded-lg bg-black text-white hover:opacity-90"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <div className="">
                  {/* Calendly Embed */}
                  <div className="mb-4 flex flex-col justify-start md:justify-between items-start gap-1.5">
                    <h2 className="text-xl font-semibold text-white">
                      Schedule {selectedPlatform === "meet" ? "Google Meet" : "Zoom"} Call
                    </h2>
                    <Button
                      onClick={handleBack}
                      className="text-white  font-medium"
                    >
                      Back
                    </Button>
                  </div>

                  <div className="h-[600px] w-full max-w-[400px]">
                    <InlineWidget
                      url={calendlyUrls[selectedPlatform]}
                      styles={{ height: "100%", width: "100%"}}
                      pageSettings={{
                        backgroundColor: "000000",
                        primaryColor: "2AC500",
                        textColor: "FAFAFA",
                      }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Modal>
  );
}