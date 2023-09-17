import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product";
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button variant="btn-primary w-full" title="Login" type="submit"></Button>
    </form>
  );
};

export default FormLogin;
