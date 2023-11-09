export default function Frame ({ children, className, wmiddle }) {
  return (
      <div className="w-screen h-screen py-4 items-center justify-center bg-gray-200">
      <div className={`${wmiddle} ml-5`}>
        <div className={`flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );

}