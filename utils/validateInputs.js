import FormLabels from "../assets/forms_i18n.json";

export const validateInputs = (name, value, locale) => {
  switch (name) {
    case "email":
      const passed =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );
      if (!passed)
        return locale === "en-US"
          ? FormLabels.labels[0].emailError
          : FormLabels.labels[1].emailError;
      return null;
    case "phoneNumber":
      if (value.length === 0) return null;
      if (!/^09[0-9]{8}$/.test(value))
        return locale === "en-US"
          ? FormLabels.labels[0].phoneError
          : FormLabels.labels[1].phoneError;
      return null;
      
    
    case "inviterPhone":
      if (value.length === 0) return null;
      if (!/^09[0-9]{8}$/.test(value))
        return locale === "en-US"
          ? FormLabels.labels[0].phoneError
          : FormLabels.labels[1].phoneError;
      return null;
    case "contactPhone":
      if (value.length === 0)
        return locale === "en-US"
          ? FormLabels.labels[0].emptyFieldError
          : FormLabels.labels[1].emptyFieldError;
      if (!/^09[0-9]{8}$/.test(value))
        return locale === "en-US"
          ? FormLabels.labels[0].phoneError
          : FormLabels.labels[1].phoneError;
      return null;
    case "contactOtherPhone":
      if (value.length === 0) return null;
      if (!/^09[0-9]{8}$/.test(value))
        return locale === "en-US"
          ? FormLabels.labels[0].phoneError
          : FormLabels.labels[1].phoneError;
      return null;
    case "password":
      if (value.length >= 8) return null;
      else
        return locale === "en-US"
          ? FormLabels.labels[0].passwordError
          : FormLabels.labels[1].passwordError;
    default:
      if (/^ *$/.test(value))
        return locale === "en-US"
          ? FormLabels.labels[0].emptyFieldError
          : FormLabels.labels[1].emptyFieldError;
      return null;
  }
};
