const pages = import.meta.glob('../views/**/page.ts', {
  eager: true,
  import: 'default'
})

const pageComponents = import.meta.glob('../views/**/index.vue')

const createRoute = ([filePath, config]: [string, unknown]) => {
  const path = filePath.replace('../views', '').replace('/page.ts', '')
  const name = path.split('./').filter(Boolean).join('-') || 'index'
  const componentPath = filePath.replace('page.ts', 'index.vue')

  return {
    path,
    name,
    component: pageComponents[componentPath],
    meta: config
  }
}

const routes = Object.entries(pages).map(createRoute)

// routes.unshift({
//   path: '/',
//   redirect: '/home'
// })

export default routes
