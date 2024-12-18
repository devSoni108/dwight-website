import Navbar from '@/app/Components/Navbar'
import ChatSim from '@/app/Components/ChatSim'
import Footer from '@/app/Components/Footer'
import { PageWrapper } from '@/app/Components/page-wrapper'

export default function Home() {
  return (
    <PageWrapper>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ChatSim />
      <Footer />
    </div>
    </PageWrapper>
  )
}
