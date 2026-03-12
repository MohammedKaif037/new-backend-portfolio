export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Mohammed Kaif. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
