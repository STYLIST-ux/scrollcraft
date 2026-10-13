  const links = document.querySelectorAll(".nav-links a")
  const sections = document.querySelectorAll("section")
  
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(
        entry => {
          if(entry.isIntersecting) {
            const id = entry.target.id
            links.forEach(l => l.classList.remove("active"))
            const lin = Array.from(links).find(a => a.hash === `#${id}`)
             if(lin) {
               lin.classList.add("active")
             }
          }
        })
    },{
      root: null,
      rootMargin: "-20px 0px -60px 0px",
      threshold: 0
    })
    
    sections.forEach(s => observer.observe(s))