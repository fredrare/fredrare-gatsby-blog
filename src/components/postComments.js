import React, { useState, useEffect } from "react"
import Giscus from "@giscus/react"

const Comments = () => {
  const [theme, setTheme] = useState("light_protanopia")
  useEffect(() => {
    setTheme(document.location.origin + "/css/comments-0.3.css")
  }, [])
  return (
    <section className="max-w-3xl mx-auto py-8">
      <div className="px-6 py-4 rounded-lg overflow-x-hidden bg-white border-white shadow-solid-md max-h-[50vh] overflow-y-scroll">
        <Giscus
          id="comments"
          repo="fredrare/blog-interactions"
          repoId="R_kgDOILnYCA"
          category="Announcements"
          categoryId="DIC_kwDOILnYCM4CR5wD"
          mapping="og:title"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme={theme}
          lang="es"
          loading="lazy"
          crossorigin="anonymous"
          strict="0"
        />
      </div>
    </section>
  )
}

export default Comments
