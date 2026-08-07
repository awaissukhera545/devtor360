# EmailJS Template Setup

`contact-notification-template.html` is the email your team receives when someone
submits the [contact form](../src/components/layout/ContactForm.tsx). It maps
directly to the form's field names.

## Setup

1. Go to your [EmailJS dashboard](https://dashboard.emailjs.com/admin/templates) → **Email Templates** → **Create New Template**.
2. Switch the editor to **Code Editor** (`</>` icon) and paste in the contents of `contact-notification-template.html`.
3. Set the template's **Subject** to:
   ```
   New Inquiry from {{from_name}} — Devtor360
   ```
4. Set **To Email** to `awaisrafiquesukhera786@gmail.com` for now (testing inbox).
   Switch this to `info@devtor360.com` once the real inbox is ready.
5. Set **Reply To** to `{{reply_to}}` so replying goes straight to the visitor.
6. Save, then copy the **Template ID** into `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   ```

## Before you paste it in

The footer links to `https://devtor360.com` — update that URL in
`contact-notification-template.html` if your live domain is different.

## Fields used

| Variable        | Source field on the form |
|-----------------|---------------------------|
| `{{from_name}}` | Full Name                 |
| `{{reply_to}}`  | Email Address              |
| `{{phone}}`     | Phone Number                |
| `{{company}}`   | Company                     |
| `{{service}}`   | Service Needed (select)     |
| `{{budget}}`    | Estimated Budget (select)   |
| `{{message}}`   | Project Details             |
