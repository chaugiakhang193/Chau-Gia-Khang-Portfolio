import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { PageTransition } from './components/PageTransition'
import { RouteProgress } from './components/RouteProgress'
import { ScrollToTop } from './components/ScrollToTop'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'
import { Resume } from './pages/Resume'
import { Skills } from './pages/Skills'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <RouteProgress />

      <Layout>
        {/* mode="wait" de trang cu chay xong exit roi trang moi moi vao, tranh chong hinh */}
        <AnimatePresence mode="wait" initial={false}>
          {/* key nam tren PageTransition: motion.div la con truc tiep cua AnimatePresence
              nen exit chay duoc, con Routes giu location cu de trang cu con hien khi thoat */}
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </Layout>
    </>
  )
}
