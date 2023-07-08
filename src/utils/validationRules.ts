const validateName = (value: string | number) => {
  if (value) return true;
  return 'Campo Obrigatório';
};

const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(value)) return true;
  return 'Email Inválido';
};

export default {
  validateName,
  validateEmail,
};
