export interface _Btn {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type: "default" | "primary" | "link"
}

export default function Btn({ children, type, onClick }: _Btn) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  )
}
