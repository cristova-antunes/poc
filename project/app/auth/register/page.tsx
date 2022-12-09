"use client"

import Btn from "../../../components/ui/Btn"
import { FormEvent, useRef } from "react"
import { ButtonStyle } from "../../../ts/enums/enums"
import { User, UserAuth } from "../../../ts/interfaces/User"

export default function Page() {
  const inputs = {
    username: useRef<HTMLInputElement | null>(null),
    password: useRef<HTMLInputElement | null>(null),
    name: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    address: useRef<HTMLInputElement | null>(null),
    birthday: useRef<HTMLInputElement | null>(null),
    phone: useRef<HTMLInputElement | null>(null),
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>About you</legend>
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" id="name" ref={inputs.name} required />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={inputs.email}
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            ref={inputs.phone}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            ref={inputs.address}
            required
          />
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            ref={inputs.birthday}
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
            ref={inputs.username}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={inputs.password}
            required
          />
        </fieldset>

        <Btn btnStyle={ButtonStyle.primary}>Sign in</Btn>
      </form>
    </>
  )
}
