// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

export interface ProjectInterface {
  id: string
  description: { description: string }
  name: string
  image: {
    resolutions: {
      src: string
    }
  }
}

declare module "react-reveal" {
  interface ExportInterface {
    Zoom: any
  }
  export = ExportInterface
}