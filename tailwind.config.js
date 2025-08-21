/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configura os caminhos para os arquivos HTML que o Tailwind deve analisar.
  // Isso é essencial para que o compilador do Tailwind inclua apenas as classes usadas.
  content: [
    "./index.html",
    // Se você tiver outros arquivos (por exemplo, JavaScript ou outras páginas),
    // adicione os caminhos aqui.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
