
const LoginPage = () => {
  return (
    <>
    <div>Sign in</div>
    <input placeholder="Username" />
    <input placeholder="Password" />
    <button>Log in</button>
    <label htmlFor="remember-me">Remember me</label>
    <input id="remember-me" type="checkbox" />
    <a href="#">Forgot password</a>
    </>
  )
}

export default LoginPage