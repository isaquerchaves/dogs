import React from "react";
import useForm from "../../../Hooks/useForm";
import { UserContext } from "../../../UserContext";
import { USER_POST } from "../../../api";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import useFetch from "../../../Hooks/useFetch";
import Error from "../../Helper/Error";

const LoginCreate = () => {
  const username = useForm("username");
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin }: any = React.useContext(UserContext);
  const [data, loading, error, request]: any = useFetch();
  async function handleSubmit(event: any) {
    event.preventDefault();

    const userData: any = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    const { url, options } = USER_POST(userData);
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
