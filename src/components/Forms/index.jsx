import { StyledForms, StyledInput, SytledButton } from "./styles";

export const Forms = () => {
  return (
    <StyledForms>
      <h1>WeatherApp</h1>
      <div>
        <StyledInput placeholder="City or Zip-Code"/>
        <SytledButton>Search</SytledButton>
      </div>
    </StyledForms>
  );
};
