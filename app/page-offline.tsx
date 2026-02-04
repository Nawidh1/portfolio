// Rename this file to page.tsx to enable maintenance mode
// Rename your current page.tsx to page-online.tsx to save it

export default function Maintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-6 max-w-md">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Site Under Maintenance
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            We&apos;re currently performing some maintenance. We&apos;ll be back online shortly.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  )
}
