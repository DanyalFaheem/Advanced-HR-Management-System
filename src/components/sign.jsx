import styled from "styled-components";

const SignIn = (props) => {
  return (
    <Container>
      <Header>Login</Header>
      <Content>
        <Img>
          <img src="/images/login.svg" alt="" />
        </Img>
        <Form>
          <Formgroup>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </Formgroup>
          <Formgroup>
            {" "}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </Formgroup>
        </Form>
      </Content>
      <Footer>
        <button type="button" className="btn">
          Login
        </button>
      </Footer>
    </Container>
  );
};
const Container = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.a`
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
`;
const Content = styled.a`
  display: flex;
  flex-direction: column;
`;
const Img = styled.a`
  width: 21em;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Form = styled.a`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Formgroup = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  label {
    font-size: 20px;
  }
  input {
    margin-top: 6px;
    min-width: 18em;
    height: 37px;
    padding: 0px 10px;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    background-color: #f3f3f3;
    border: 0;
    border-radius: 4px;
    margin-bottom: 31px;
    transition: all 250ms ease-in-out;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 12px 0.8px #3474dbb2;
    }
`;
const Footer = styled.a`
  margin-top: 3em;
`;

export default SignIn;
