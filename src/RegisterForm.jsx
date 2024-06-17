import { useForm } from "react-hook-form";

function RegisterForm() {
  const form = useForm();
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  return (
    <form>
      <h1>Register</h1>
      <input type="text" />
      <input type="password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
