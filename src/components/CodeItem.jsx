import { useState } from "react"

async function copyText(text) {
  // Primary: modern clipboard API (needs secure context, works in most mobile browsers on https)
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // fall through to legacy method
    }
  }
  // Fallback for older/mobile browsers or non-secure context
  try {
    const textarea = document.createElement("textarea")
    textarea.value = text
    textarea.style.position = "fixed"
    textarea.style.top = "-9999px"
    textarea.style.left = "-9999px"
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    const successful = document.execCommand("copy")
    document.body.removeChild(textarea)
    return successful
  } catch {
    return false
  }
}

export default function CodeItem({ code, reward, status }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    if (status === "expired") return
    const ok = await copyText(code)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={"code-item" + (status === "expired" ? " code-item--expired" : "")}>
      <div className="code-item__info">
        <p className="code-item__code">{code}</p>
        <p className="code-item__reward">Reward: {reward}</p>
      </div>
      {status === "active" ? (
        <button
          className={"btn code-item__btn" + (copied ? " code-item__btn--copied" : " btn-primary")}
          onClick={handleCopy}
        >
          {copied ? "COPIED!" : "COPY"}
        </button>
      ) : (
        <span className="code-item__status">Expired</span>
      )}
    </div>
  )
}
