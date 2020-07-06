type Main = (name?: string) => void
export const main: Main = (name) => {
  console.log(`hello ${name || "ts"}!`)
}

const num = 12378
console.log(num)
