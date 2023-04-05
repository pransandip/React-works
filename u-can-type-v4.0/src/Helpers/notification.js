import { toast } from "react-toastify";

export const popup = (msg) => {
  toast.success(msg, {
    position: "bottom-center",
    autoClose: 300,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    closeButton: false,
    style: { fontSize: "13px", width: "250px" },
  });
};

export const errorPopup = (msg) => {
  toast.error(msg, {
    position: "bottom-center",
    autoClose: 300,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    closeButton: false,
    style: { fontSize: "13px", width: "250px" },
  });
};
