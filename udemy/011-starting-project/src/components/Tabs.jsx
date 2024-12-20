export default function Tabs({ buttons, children, ButtonsContainer = "menu" }) {
  // const ButtonsContainer = buttonsContainer; // making it as component not as value
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
