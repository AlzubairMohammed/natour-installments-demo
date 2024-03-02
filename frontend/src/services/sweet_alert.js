import swal from "sweetalert2";
window.Swal = swal;

const responseAlert = (icon, title, text) => {
  swal.fire({
    title: title,
    text: text,
    icon: icon,
    toast: true,
    position: "top-start",
    showConfirmButton: false,
    timer: 3000,
  });
  // setTimeout(() => {
  //   window.location.reload();
  // }, 1500);
};

export default responseAlert;
