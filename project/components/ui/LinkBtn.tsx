import Link from "next/link"
import { _Btn } from "./Btn"

export interface _LinkBtn extends _Btn {
  href: string
}

export default function LinkBtn(props: _LinkBtn) {
  return (
    <Link href={props.href} className={`btn btn-${props.btnStyle}`}>
      {props.children}
    </Link>
  )
}
