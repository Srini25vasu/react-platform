function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-center px-4 text-sm text-slate-500">
        © {new Date().getFullYear()} Steadforce. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer