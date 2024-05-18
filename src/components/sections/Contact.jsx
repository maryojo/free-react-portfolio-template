import React, {useState, useRef} from "react";
import Button from "../base-components/Button";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    let isEmpty = false;

    for (let element of formElements) {
        if (element.type !== 'submit' && element.value.trim() === '') {
            isEmpty = true;
            break;
        }
    }

    if (isEmpty) {
      setError("missing-field");
      return;
    }

    const formData = new FormData(event.target);
    const formSpreeEndpoint = "#";

    try {
      setIsSubmitting(true);
      const res = await fetch(formSpreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if(res.status === 200){
        setIsSubmitting(false);
        setIsSubmitted(true);
        formRef.current.reset();
      } else {
        setIsSubmitted(false);
        setIsSubmitting(false);
        setError(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitted(false);
      setIsSubmitting(false);
      setError(true);
    }
  };

  setTimeout(() => {
    setError(false); 
  }, 5000);

  setTimeout(() => {
    setIsSubmitted(false); 
  }, 5000);

  return (
    <div>
      <div className="flex relative flex-row items-center w-full bg-neutral-900">
        <div className="hidden lg:block lg:absolute left-10 border-2 border-neutral-700">
        <img className="lg:w-[10rem] xl:w-[15rem]" src="https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        </div>
        <div className="w-0 lg:w-[40%]">
        </div>
        <div className=" p-7 lg:pl-0 w-full lg:w-[60%] flex flex-col gap-3">
          <p className="font-bold text-[32px]">Get in touch</p>
          <form ref={formRef} className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <input type="text" name="message" placeholder="Message" className="mb-3"/>
            <Button text="Send Message" type="submit"/>
            {isSubmitting && <p className="text-sm">Sending...</p>}
        {error=== true && <p className="text-sm">Something went wrong</p>}
        {error=== "missing-field" && <p className="text-sm">Please fill in all fields</p>}
        {isSubmitted && <p className="text-sm">Your message has been sent. Thank you!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
