import { ButtonStyle } from "../../ts/enums/enums"

export interface _Btn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  btnStyle: ButtonStyle
}

export default function Btn(props: _Btn) {
  return (
    <button className={`btn btn-${props.btnStyle}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
