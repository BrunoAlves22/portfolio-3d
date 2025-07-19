export function About() {
  return (
    <section className="sm:px-10 px-5 lg:px-15 min-h-screen mt-20 md:mt-30">
      <h2 className="font-bold text-3xl md:text-4xl text-white">Sobre Mim</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end p-6 bg-gradient-to-b from-indigo-800 to-indigo-900 rounded-2xl row-span-2 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200"></div>
        {/* Grid 2 */}
        <div className="row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 p-6 bg-gradient-to-b from-indigo-800 to-indigo-900 rounded-2xl"></div>
      </div>
    </section>
  );
}
