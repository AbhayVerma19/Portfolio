import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Kanishka',

  projectId: 'z8itxxhs',
  dataset: 'production',
  basePath:'/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
