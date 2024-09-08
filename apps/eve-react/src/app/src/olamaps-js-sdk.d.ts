declare module 'ola-maps-sdk' {
  interface OlaMaps {
    init: (options: any) => void; // Replace 'any' with actual type if known
    // Add other methods and properties you use
  }

  const OlaMaps: OlaMaps;
  export = OlaMaps;
}
