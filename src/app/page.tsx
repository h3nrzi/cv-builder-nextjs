import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">CV Builder</h1>
        <p className="mb-8 text-lg text-gray-600">Create professional CVs with beautiful themes</p>
        <Link
          href="/editor"
          className="rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
        >
          Start Building
        </Link>
      </div>
    </div>
  );
}
