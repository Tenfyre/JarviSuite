import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">JarviSuite</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your AI-powered productivity suite
          </p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Authentication and core features coming soon...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
