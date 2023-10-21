import emailjs from "emailjs-com";

type Data = {
  from_email: string;
  message: string;
};

export const sendEmail = (data: Data) => {
  const sendData = {
    from_name: "Portfolio",
    ...data,
  };
  try {
    emailjs.send("service_7p9oult", "template_xp94twj", sendData, "K8qxp8teKP_1Fn8-r");
  } catch (error: any) {
    console.error(error.message);
  }
};
