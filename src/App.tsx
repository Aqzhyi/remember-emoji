import 'preact/debug'
import { AppNav } from '~/components/AppNav'
import { useRouter } from '~/hooks/useRouter'
import { SearchPage } from '~/pages/SearchPage'
import { render, h } from 'preact'
import { makeStyles } from '@material-ui/core/styles'
import { FC } from 'preact/compat'

const App: FC = props => {
  const router = useRouter(globalThis.location.pathname)
  const css = useStyles({})

  return (
    <div>
      <span className={css.appNav}>
        <AppNav></AppNav>
      </span>
      {router.navSelected === '/search' ? <SearchPage /> : null}
    </div>
  )
}

const useStyles = makeStyles({
  appNav: {
    display: 'block',
    marginBottom: 16,
  },
})

const root = globalThis.document.querySelector('#root')

if (root) {
  render(<App />, root)
} else {
  alert(`can't find root`)
}
