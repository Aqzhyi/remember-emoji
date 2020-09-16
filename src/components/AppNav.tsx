import { Paper, Tab, Tabs } from '@material-ui/core'
import { h } from 'preact'
import PhoneIcon from '@material-ui/icons/Phone'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import { useRouter } from '~/hooks/useRouter'
import type { FC } from 'preact/compat'

export const AppNav: FC = props => {
  const router = useRouter(globalThis.location.pathname)

  return (
    <Paper square>
      <Tabs
        value={router.navSelected}
        onChange={(event, value) => {
          router.go(value)
        }}
        variant='fullWidth'
        indicatorColor='secondary'
        textColor='secondary'
      >
        <Tab icon={<PhoneIcon />} label='Search' value='/search' />
        <Tab icon={<FavoriteIcon />} label='Test' value='/test' />
        {/* <Tab icon={<PersonPinIcon />} label='Rank' /> */}
      </Tabs>
    </Paper>
  )
}
