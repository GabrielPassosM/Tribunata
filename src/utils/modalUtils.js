import Swal from 'sweetalert2';

/**
 * Show a error modal
 * @param {string} title - Modal title
 * @param {string} text - Body text
 * @param {string} confirmButtonText - Confirmation button text
 */
export const showErrorModal = ({ title = "Ops!", text, confirmButtonText = 'Ok' }) => {
    const icon = "error"
    return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });
};
