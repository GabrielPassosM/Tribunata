import Swal from 'sweetalert2';


export const showErrorModal = ({ title = "Ops!", text, confirmButtonText = 'Ok' }) => {
    const icon = "error"
    return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });
};


export const showSuccessModal = ({ title, confirmButtonText = "Ok" }) => {
  const icon = "success"
  return Swal.fire({
  title,
  icon,
  confirmButtonText,
});
};

export async function showConfirmationModal(
  title = "Você tem certeza?", 
  text = "Essa ação não pode ser desfeita!", 
  confirmButtonText = "Sim, confirmar!",
  cancelButtonText = "Cancelar"
) {
  const result = await Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText,
    cancelButtonText,
  })

  return result.isConfirmed
}