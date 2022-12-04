"use client"

import Btn from "../../../components/ui/Btn"
import { FormEvent, useRef } from "react"
import { ButtonStyle } from "../../../ts/enums/enums"

export default function page() {
  const userRef = useRef<HTMLInputElement | null>(null)
  const pwRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({ userRef, pwRef })
  }

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" ref={userRef} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" ref={pwRef} />
        </fieldset>
        <Btn btnStyle={ButtonStyle.primary}>Sign up</Btn>
      </form>
    </>
  )
}
