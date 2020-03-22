import { openGlobalMessageBox } from "Helper";

export const handleError = err => {
  console.log(err);
  openGlobalMessageBox({
    title: "Doctor AI",
    message: err.message || "Something went wrong",
    type: "error"
  });
};
