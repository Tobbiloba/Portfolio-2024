import { Resend } from "resend";
import { toast } from "react-toastify";
const ResendMail = async ({ formDatab, setLoading }) => {
  setLoading(true);
  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxpq2iRPGS1gbSUMH4kdOqEraGHoDsoag1ugjA8pmYTgZUU5aWSj__qGFvicuQMSvAFdA/exec",
      {
        method: "POST",
        body: formDatab,
      }
    );

    toast.success("Successfully sent mail!", { position: "top-center" });
  } catch (error) {
    console.error("Error sending email:", error);
    toast.error("Sorry, an error occurred.", { position: "top-center" });
  } finally {
    setLoading(false);
  }
};

export default ResendMail;
