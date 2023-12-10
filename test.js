import { readFileSync, writeFileSync } from "fs"

const renderNewData = (main, renewable) => {
  Object.entries(main).forEach(([key, value]) => {
    if (typeof value === "object") {
      main[key] = renderNewData(main[key], renewable[key] || {})
    } else {
      main[key] = renewable.hasOwnProperty(key) ? renewable[key] : value
    }
  })
  return main
}

function syncReadFile(mainFileName, renewableFileName) {
  try {
    const main = JSON.parse(readFileSync(mainFileName, "utf-8") || "null") || {}
    const renewable = JSON.parse(readFileSync(renewableFileName, "utf-8") || "null") || {}
    const newData = JSON.stringify(renderNewData(main, renewable))
    writeFileSync(renewableFileName, newData)
    console.log(`File ${renewableFileName} written successfully`)
  } catch (err) {
    console.error(err)
  }
}

syncReadFile("src/locales/en.json", "src/locales/uz.json")
