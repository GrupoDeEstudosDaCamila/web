import { StyledForms, StyledInput, SytledButton } from './styles'

export const Forms = () => {
  return (
    <StyledForms>
      <h1>WeatherApp 🇧🇷</h1>
      <div>
        <StyledInput placeholder="City" />
        <SytledButton>Search</SytledButton>
      </div>
    </StyledForms>
  )
}
