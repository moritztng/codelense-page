import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-16 font-mono">
      <div className="z-10 flex flex-col w-full items-center justify-between gap-6">
        <h1 className="text-3xl">Analyzing the Worlds Software on GitHub</h1>
        <p className="text-md">
          We track millions of projects every day and provide you with insights.{' '}
          <br></br> Get notified when the next breakthrough emerges.
        </p>
      </div>
      <div className="z-10 w-full max-w-3xl items-center justify-between">
        <video autoPlay loop muted>
          <source
            src="https://storage.googleapis.com/assets-telescope/video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="z-10 flex flex-col w-full items-center justify-between text-center">
        <a
          href="https://mailchi.mp/5cf99d70f4d3/ks0d5tn1v9"
          className="text-2xl underline underline-offset-8"
        >
          Join the waitlist
        </a>
      </div>
    </main>
  )
}
