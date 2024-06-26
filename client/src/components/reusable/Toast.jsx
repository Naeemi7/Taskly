import { toast } from "react-hot-toast";
import "@styles/reusableComponents.scss";

const showToast = (message, type = "success") => {
  const options = {
    position: "top-right",
    duration: 4000,
    className: "custom-toast",
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "loading":
      toast.loading(message, options);
      break;
    default:
      toast(message, options);
  }
};

export default showToast;
