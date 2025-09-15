import { Button } from "@internal/ui"
import { useId, useState } from "react"

export function ContactPage() {
  const emailId = useId()
  const messageId = useId()
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("正しいメールアドレスを入力してください")
      return
    }

    if (message.length < 10) {
      setError("メッセージは10文字以上入力してください")
      return
    }

    console.log("Form submitted:", { email, message })
    setSuccess(true)
    setEmail("")
    setMessage("")
  }

  return (
    <div className='container py-8 mx-auto'>
      <h1 className='mb-8 text-4xl font-bold'>お問い合わせ</h1>

      <div className='max-w-2xl mx-auto rounded-lg border bg-card p-6'>
        <div className='mb-6'>
          <h2 className='text-2xl font-semibold'>お問い合わせフォーム</h2>
          <p className='text-muted-foreground'>ご質問やご意見をお寄せください</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor={emailId} className='block mb-1 text-sm font-medium'>
              メールアドレス
            </label>
            <input
              type='email'
              id={emailId}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 border rounded-md'
              required
            />
          </div>

          <div>
            <label htmlFor={messageId} className='block mb-1 text-sm font-medium'>
              メッセージ
            </label>
            <textarea
              id={messageId}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='w-full px-3 py-2 border rounded-md h-32'
              required
            />
          </div>

          {error && <div className='p-3 text-sm text-red-600 bg-red-50 rounded-md'>{error}</div>}

          {success && (
            <div className='p-3 text-sm text-green-600 bg-green-50 rounded-md'>
              お問い合わせを受け付けました。ありがとうございます。
            </div>
          )}

          <Button type='submit' className='w-full'>
            送信
          </Button>
        </form>
      </div>
    </div>
  )
}
