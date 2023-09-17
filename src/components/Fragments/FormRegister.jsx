import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        name="fullname"
        type="fullname"
        placeholder="Jhon Doe"
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="******"
      />
      <InputForm
        label="Confirm Password"
        name="password"
        type="password"
        placeholder="******"
      />
      <Button variant="btn-primary w-full" title="Register"></Button>
    </form>
  );
};

export default FormRegister;
