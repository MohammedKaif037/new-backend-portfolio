"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Phone, CheckCircle2, Send } from "lucide-react"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "mohammedkaif8516@gmail.com",
    href: "mailto:mohammedkaif8516@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8618948316",
    href: "tel:+918618948316"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohammedkaif",
    href: "https://www.linkedin.com/in/mohammed-kaif-a7793923a/"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kaif-dev",
    href: "https://github.com/MohammedKaif037"
  }
]

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  setIsSubmitting(true)
  setError(null)

  const formData = new FormData(e.currentTarget)
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log("Supabase Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.slice(0, 20))
  console.log("Inserting:", { name, email, message })

  const { data, error: insertError } = await supabase
    .from("contact_submissions")
    .insert([{ name, email, message }])
    .select()

  console.log("Insert result:", data)
  console.log("Insert error:", insertError)

  if (insertError) {
    setError("Something went wrong. Please try again or email me directly.")
    setIsSubmitting(false)
    return
  }

  setIsSubmitting(false)
  setIsSubmitted(true)
}

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-accent mb-8" />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I will get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-4">
                    <CheckCircle2 className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-muted-foreground">
                    I will get back to you soon.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">Name</FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </Field>
                    
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background"
                      />
                    </Field>
                    
                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        rows={5}
                        required
                        className="bg-background resize-none"
                      />
                    </Field>
                  </FieldGroup>
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of these channels. I am always open to 
              discussing new opportunities, projects, or just having a chat about technology.
            </p>
            
            <div className="grid gap-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <link.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-medium text-primary">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
