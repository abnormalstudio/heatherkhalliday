// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

declare module "react-reveal"

interface ProjectInterface {
  id: string
  description: {
    id: string
    childMarkdownRemark: {
      html: string
    }
  }
  name: string
}

export interface ProjectInterfaceFluid extends ProjectInterface {
  image: {
    fluid: {
      base64: string
      aspectRatio: number
      src: string
      srcSet: string
      sizes: string
    }
  }
}
