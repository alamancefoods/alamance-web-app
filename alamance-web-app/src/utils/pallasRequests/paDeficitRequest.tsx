import { localDjangoURL, pallasServerAddress, pallasAddress } from '../rootURLs'

export const paDeficitRequest: string = pallasServerAddress.concat('/pa-deficits')
export const testPaDeficitRequest: string = localDjangoURL.concat('/pa-deficits')
export const gatewayPAAddress= pallasAddress.concat('/pa-deficits')
export const webStoreChargeCheck: string = localDjangoURL.concat('/charge/')
