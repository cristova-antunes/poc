"use client"

import Btn from "../../../components/ui/Btn"
import { FormEvent, useRef } from "react"
import { ButtonStyle } from "../../../ts/enums/enums"
import { User, UserAuth } from "../../../ts/interfaces/User"

export default function Page() {
  const userRef = useRef<HTMLInputElement | null>(null)
  const pwRef = useRef<HTMLInputElement | null>(null)
  const name = useRef<HTMLInputElement | null>(null)
  const email = useRef<HTMLInputElement | null>(null)
  const address = useRef<HTMLInputElement | null>(null)
  const birthday = useRef<HTMLInputElement | null>(null)
  const phone = useRef<HTMLInputElement | null>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({ userRef, pwRef, name, email, address, birthday, phone })
  }

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>About you</legend>
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" id="name" ref={name} required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" ref={email} required />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" ref={phone} required />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            ref={address}
            required
          />
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            ref={birthday}
            required
          />
        </fieldset>

        <fieldset>
          <legend>Account details</legend>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            ref={userRef}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={pwRef}
            required
          />
        </fieldset>

        <Btn btnStyle={ButtonStyle.primary}>Sign in</Btn>
      </form>
    </>
  )
}
