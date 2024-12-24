import ChatSim from './Components/ChatSim'
import { PageWrapper } from './Components/page-wrapper'

export default function Home() {
  return (
    <PageWrapper>
    <div className="flex flex-col min-h-screen">
      <ChatSim />
    </div>
    </PageWrapper>
  )
}
