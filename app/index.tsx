import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <div className="px-4 py-20 text-center">
      <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
        Impulsa tu marca con video marketing
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
        Producción audiovisual, contenido para redes y estrategias SEO que sí convierten.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/56912345678"
          className="rounded-xl bg-green-500 px-6 py-3 text-lg text-white hover:bg-green-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escríbenos por WhatsApp
        </a>
        <a
          href="mailto:contacto@okmedia.cl"
          className="rounded-xl bg-white px-6 py-3 text-lg text-black hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
        >
          Contáctanos
        </a>
      </div>
    </div>
  )
}
