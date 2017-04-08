import  {create as createJss } from 'jss'
import { create as createInjectSheet } from 'react-jss'
import vendorPrefixer from 'jss-vendor-prefixer'

const jss = createJss()
jss.use(vendorPrefixer())

export const injectSheet = createInjectSheet(jss)
