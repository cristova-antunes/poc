import Link from "next/link"

export interface _LinkBtn {
  children: React.ReactNode
  href: string
  type: "default" | "primary" | "link"
}

export default function LinkBtn({ children, href, type }: _LinkBtn) {
  return (
    <Link href={href} className={`btn btn-${type}`}>
      {children}
    </Link>
  )
}
