import Swal from "sweetalert2";

export const modalCharging = () => {
  Swal.fire({
    didOpen: () => {
      Swal.showLoading();
    },
    showConfirmButton: false,
    timer: 7000,
  });
};

export const modalSuccess = (message) => {
  Swal.fire({
    icon: "success",
    title: 'The action succeed.',
    text: message ? message : "",
    showConfirmButton: false,
    timer: 2000,
  });
};

export const modalError = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message ? message : '',
  });
};
export const modalInfo = (message) => {
  Swal.fire({
    icon: "info",
    title: "Information",
    text: message ? message : '',
  });
};
export const modalCheck = () => {
  return new Promise((resolve) => {
      Swal.fire({
          title: 'Are you sure?',
          html: `If you choose Yes the product will be deleted`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
      }).then((result) => {
          resolve(result);
      });
  });
};

