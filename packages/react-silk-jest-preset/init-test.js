if (typeof window !== 'undefined') {
  if (typeof HTMLCanvasElement !== 'undefined') {
    // taken from https://stackoverflow.com/questions/48828759/jest-and-jsdom-error-with-canvas
    HTMLCanvasElement.prototype.getContext = () => {
      // return whatever getContext has to return
    }
  }
  window.matchMedia = () => ({ matches: true })
}

global.__DEV__ = true

const mockEmptyObject = {}

// Make sure snapshots contain the original style objects
jest.mock('react-native-web/dist/cjs/modules/ReactNativePropRegistry', () => ({
  register: id => id,
  getByID: () => mockEmptyObject,
}))

jest.mock('react-native-web/dist/modules/ReactNativePropRegistry', () => ({
  register: id => id,
  getByID: () => mockEmptyObject,
}))
