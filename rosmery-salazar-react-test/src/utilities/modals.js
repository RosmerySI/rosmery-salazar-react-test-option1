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
    title: 'La acción se realizó con éxito.',
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
    title: "Información",
    text: message ? message : '',
  });
};
export const modalCheck = () => {
  return new Promise((resolve) => {
      Swal.fire({
          title: '¿Estás segur@?',
          html: `Si eliges Si tu cuenta se borrará`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si'
      }).then((result) => {
          resolve(result);
      });
  });
};

