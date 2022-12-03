export default function page() {
  return (
    <>
      <h1>Sign in</h1>
      <form>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </fieldset>
        <button>Sign in</button>
      </form>
    </>
  )
}
