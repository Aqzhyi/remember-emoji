import { Button, FormLabel, OutlinedInput, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import gemoji from 'gemoji'
import { Fragment, h } from 'preact'
import type { FC } from 'preact/compat'

type Emoji = typeof gemoji

export const SearchPage: FC = props => {
  return (
    <Autocomplete
      options={gemoji}
      filterOptions={(options, state) => {
        const inputValue = state.inputValue.trim()

        if (inputValue.length <= 1) {
          return []
        }

        return options.filter(
          option =>
            option.tags.toString().includes(inputValue) ||
            option.names.toString().includes(inputValue),
        )
      }}
      getOptionLabel={option => option.emoji}
      renderOption={option => {
        const hasTags = option.tags.length >= 1
        return (
          <Fragment>
            <FormLabel>{option.emoji}</FormLabel>
            <Fragment> </Fragment>
            {hasTags ? `#${option.tags.toString()}` : ``}
            {option.description} - {option.names.toString()}
          </Fragment>
        )
      }}
      renderInput={params => (
        <TextField
          {...params}
          label='Choose a country'
          variant='outlined'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  )
}
