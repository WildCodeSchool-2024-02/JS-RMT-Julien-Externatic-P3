import FormLogin from "../../../components/frontOffice/Forms/FormLogin/FormLogin";
import "../SignUP/SignUp.css";

function Login() {
  return (
    <main className="sign-up">
      <h1 className="style-title-h1">Bienvenue ! Merci de vous identifier.</h1>
      <FormLogin />
    </main>
  );
}

export default Login;